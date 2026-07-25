<?php
// PHP Advanced SEO Router for Next.js Static HTML
$request_uri = $_SERVER['REQUEST_URI'];
$path = parse_url($request_uri, PHP_URL_PATH);
if ($path !== '/' && rtrim($path, '/') !== '') {
    $path = rtrim($path, '/');
}

// Ignore admin routes
if (strpos($path, '/seo-admin') === 0) {
    return false;
}

$db_file = __DIR__ . '/seo.sqlite';
$seo_data = null;
if (file_exists($db_file)) {
    try {
        $db = new PDO('sqlite:' . $db_file);
        $stmt = $db->prepare("SELECT * FROM pages WHERE url_slug = ?");
        $stmt->execute([$path]);
        $seo_data = $stmt->fetch(PDO::FETCH_ASSOC);
    } catch (Exception $e) {}
}

// 1. Handle 301 Redirects
if ($seo_data && $seo_data['is_redirect'] == 1 && !empty($seo_data['redirect_url'])) {
    header("Location: " . $seo_data['redirect_url'], true, 301);
    exit;
}

// 2. Resolve HTML File Path (allowing SEO expert to map custom slugs)
$target_html = $path;
if ($seo_data && !empty($seo_data['target_html_file'])) {
    $target_html = $seo_data['target_html_file'];
}

$html_file = __DIR__ . $target_html;
if (is_dir($html_file)) {
    $html_file .= '/index.html';
} elseif (!str_ends_with($html_file, '.html')) {
    $html_file .= '.html';
}

if (!file_exists($html_file)) {
    $html_file = __DIR__ . '/404.html';
    if (!file_exists($html_file)) {
        http_response_code(404);
        echo "404 Not Found";
        exit;
    }
}

$html = file_get_contents($html_file);

// 3. Inject Advanced SEO Tags
if ($seo_data) {
    $injections = "";

    if (!empty($seo_data['meta_title'])) {
        if (preg_match('/<title>.*?<\/title>/i', $html)) {
            $html = preg_replace('/<title>.*?<\/title>/i', '<title>' . htmlspecialchars($seo_data['meta_title']) . '</title>', $html);
        } else {
            $injections .= '<title>' . htmlspecialchars($seo_data['meta_title']) . '</title>' . "\n";
        }
    }
    
    // Helper to replace or inject meta tags
    $meta_tags = [
        'description' => $seo_data['meta_description'],
        'keywords' => $seo_data['keywords'],
        'robots' => $seo_data['robots_meta']
    ];
    foreach($meta_tags as $name => $content) {
        if(!empty($content)) {
            $html = preg_replace('/<meta\s+name=["\']' . $name . '["\']\s+content=["\'].*?["\']\s*\/?>/i', '', $html);
            $injections .= '<meta name="' . $name . '" content="' . htmlspecialchars($content) . '">' . "\n";
        }
    }

    // OpenGraph
    $og_tags = [
        'og:title' => $seo_data['og_title'],
        'og:description' => $seo_data['og_description'],
        'og:image' => $seo_data['og_image']
    ];
    foreach($og_tags as $property => $content) {
        if(!empty($content)) {
            $html = preg_replace('/<meta\s+property=["\']' . $property . '["\']\s+content=["\'].*?["\']\s*\/?>/i', '', $html);
            $injections .= '<meta property="' . $property . '" content="' . htmlspecialchars($content) . '">' . "\n";
        }
    }

    // Canonical
    if (!empty($seo_data['canonical_url'])) {
        $html = preg_replace('/<link\s+rel=["\']canonical["\']\s+href=["\'].*?["\']\s*\/?>/i', '', $html);
        $injections .= '<link rel="canonical" href="' . htmlspecialchars($seo_data['canonical_url']) . '">' . "\n";
    }

    // Custom Head Tags (JSON-LD etc)
    if (!empty($seo_data['custom_head_tags'])) {
        $injections .= $seo_data['custom_head_tags'] . "\n";
    }

    // Inject everything right before </head>
    if (!empty($injections)) {
        $html = str_ireplace('</head>', $injections . '</head>', $html);
    }
}

echo $html;
?>
