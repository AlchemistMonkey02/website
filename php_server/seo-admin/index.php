<?php
session_start();
if (!isset($_SESSION['admin_logged_in']) || $_SESSION['admin_logged_in'] !== true) {
    header("Location: login.php");
    exit;
}

$db_file = dirname(__DIR__) . '/seo.sqlite';
$db = new PDO('sqlite:' . $db_file);
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

// Handle Delete
if (isset($_GET['delete'])) {
    $stmt = $db->prepare("DELETE FROM pages WHERE id = ?");
    $stmt->execute([$_GET['delete']]);
    header("Location: index.php");
    exit;
}

// Handle Add/Edit
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $url_slug = trim($_POST['url_slug']);
    if ($url_slug !== '/' && strpos($url_slug, '/') !== 0) $url_slug = '/' . $url_slug;
    
    $target_html_file = trim($_POST['target_html_file'] ?? '');
    if ($target_html_file !== '/' && strpos($target_html_file, '/') !== 0 && $target_html_file !== '') $target_html_file = '/' . $target_html_file;

    $meta_title = $_POST['meta_title'] ?? '';
    $meta_description = $_POST['meta_description'] ?? '';
    $keywords = $_POST['keywords'] ?? '';
    $canonical_url = $_POST['canonical_url'] ?? '';
    $og_title = $_POST['og_title'] ?? '';
    $og_description = $_POST['og_description'] ?? '';
    $og_image = $_POST['og_image'] ?? '';
    $robots_meta = $_POST['robots_meta'] ?? '';
    $custom_head_tags = $_POST['custom_head_tags'] ?? '';
    $is_redirect = isset($_POST['is_redirect']) ? 1 : 0;
    $redirect_url = trim($_POST['redirect_url'] ?? '');

    if (!empty($_POST['id'])) {
        $stmt = $db->prepare("UPDATE pages SET url_slug=?, target_html_file=?, meta_title=?, meta_description=?, keywords=?, canonical_url=?, og_title=?, og_description=?, og_image=?, robots_meta=?, custom_head_tags=?, is_redirect=?, redirect_url=? WHERE id=?");
        $stmt->execute([$url_slug, $target_html_file, $meta_title, $meta_description, $keywords, $canonical_url, $og_title, $og_description, $og_image, $robots_meta, $custom_head_tags, $is_redirect, $redirect_url, $_POST['id']]);
    } else {
        try {
            $stmt = $db->prepare("INSERT INTO pages (url_slug, target_html_file, meta_title, meta_description, keywords, canonical_url, og_title, og_description, og_image, robots_meta, custom_head_tags, is_redirect, redirect_url) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
            $stmt->execute([$url_slug, $target_html_file, $meta_title, $meta_description, $keywords, $canonical_url, $og_title, $og_description, $og_image, $robots_meta, $custom_head_tags, $is_redirect, $redirect_url]);
        } catch(PDOException $e) {
            $error = "Error: URL Slug might already exist!";
        }
    }
    if (!isset($error)) {
        header("Location: index.php");
        exit;
    }
}

$pages = $db->query("SELECT * FROM pages ORDER BY url_slug ASC")->fetchAll(PDO::FETCH_ASSOC);
$edit_page = null;
if (isset($_GET['edit'])) {
    $stmt = $db->prepare("SELECT * FROM pages WHERE id = ?");
    $stmt->execute([$_GET['edit']]);
    $edit_page = $stmt->fetch(PDO::FETCH_ASSOC);
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Advanced SEO Console</title>
    <style>
        body { font-family: sans-serif; background: #f4f4f5; margin: 0; padding: 20px; }
        .header { display: flex; justify-content: space-between; align-items: center; background: white; padding: 15px 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 20px; }
        .container { display: flex; gap: 20px; align-items: flex-start; }
        .card { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); flex: 1; }
        table { width: 100%; border-collapse: collapse; font-size: 14px; }
        th, td { padding: 10px; text-align: left; border-bottom: 1px solid #ddd; }
        .form-group { margin-bottom: 15px; }
        label { display: block; margin-bottom: 5px; font-weight: bold; font-size: 13px; color: #333; }
        input[type="text"], textarea, select { width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; }
        button { padding: 10px 15px; background: #05A5C7; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold; width: 100%; }
        .action-btn { font-size: 12px; padding: 5px 8px; text-decoration: none; border-radius: 4px; color: white; margin-right: 5px; }
        .btn-edit { background: #3b82f6; } .btn-delete { background: #ef4444; }
        .section-title { font-size: 16px; margin-top: 20px; margin-bottom: 10px; padding-bottom: 5px; border-bottom: 2px solid #eee; color: #05A5C7;}
    </style>
</head>
<body>
    <div class="header">
        <h1 style="margin:0;font-size:22px;">Advanced SEO Console</h1>
        <a href="logout.php" style="color:red;font-weight:bold;text-decoration:none;">Logout</a>
    </div>
    
    <div class="container">
        <div class="card" style="flex: 1.5;">
            <h2>Managed URLs / Redirects</h2>
            <table>
                <tr>
                    <th>URL Slug</th>
                    <th>Meta Title / Redirect</th>
                    <th>Actions</th>
                </tr>
                <?php foreach($pages as $p): ?>
                <tr>
                    <td><strong><?= htmlspecialchars($p['url_slug']) ?></strong></td>
                    <td>
                        <?php if($p['is_redirect']): ?>
                            <span style="color:red;">&#8618; Redirects to <?= htmlspecialchars($p['redirect_url']) ?></span>
                        <?php else: ?>
                            <?= htmlspecialchars($p['meta_title']) ?>
                        <?php endif; ?>
                    </td>
                    <td>
                        <a href="index.php?edit=<?= $p['id'] ?>" class="action-btn btn-edit">Edit</a>
                        <a href="index.php?delete=<?= $p['id'] ?>" class="action-btn btn-delete" onclick="return confirm('Delete this SEO mapping?');">Delete</a>
                    </td>
                </tr>
                <?php endforeach; ?>
            </table>
        </div>
        
        <div class="card" style="flex: 2;">
            <h2><?= $edit_page ? 'Edit SEO Configuration' : 'Add New SEO Configuration' ?></h2>
            <?php if(isset($error)) echo "<div style='color:red;margin-bottom:15px;'>$error</div>"; ?>
            <form method="POST" action="index.php">
                <?php if($edit_page): ?><input type="hidden" name="id" value="<?= $edit_page['id'] ?>"><?php endif; ?>
                
                <div class="section-title">Core Routing & Redirects</div>
                <div style="display:flex; gap:10px;">
                    <div class="form-group" style="flex:1;">
                        <label>Public URL Slug (e.g., /services)</label>
                        <input type="text" name="url_slug" value="<?= $edit_page ? htmlspecialchars($edit_page['url_slug']) : '' ?>" required>
                    </div>
                    <div class="form-group" style="flex:1;">
                        <label>Physical Target HTML File (Optional)</label>
                        <input type="text" name="target_html_file" placeholder="/services.html" value="<?= $edit_page ? htmlspecialchars($edit_page['target_html_file']) : '' ?>" title="Leave blank if it matches the URL slug">
                    </div>
                </div>

                <div style="display:flex; gap:10px; background:#fff3cd; padding:10px; border-radius:4px; margin-bottom:15px;">
                    <div class="form-group" style="margin-bottom:0;">
                        <label><input type="checkbox" name="is_redirect" value="1" <?= $edit_page && $edit_page['is_redirect'] ? 'checked' : '' ?>> This is a 301 Redirect</label>
                    </div>
                    <div class="form-group" style="flex:1; margin-bottom:0;">
                        <input type="text" name="redirect_url" placeholder="Redirect Destination URL" value="<?= $edit_page ? htmlspecialchars($edit_page['redirect_url']) : '' ?>">
                    </div>
                </div>

                <div class="section-title">Basic SEO</div>
                <div class="form-group">
                    <label>Meta Title</label>
                    <input type="text" name="meta_title" id="meta_title_input" value="<?= $edit_page ? htmlspecialchars($edit_page['meta_title']) : '' ?>">
                    <div id="title_counter" style="font-size:11px; margin-top:4px;"></div>
                </div>
                <div class="form-group">
                    <label>Meta Description</label>
                    <textarea name="meta_description" id="meta_desc_input" rows="2"><?= $edit_page ? htmlspecialchars($edit_page['meta_description']) : '' ?></textarea>
                    <div id="desc_counter" style="font-size:11px; margin-top:4px;"></div>
                </div>
                <div style="display:flex; gap:10px;">
                    <div class="form-group" style="flex:1;">
                        <label>Keywords</label>
                        <input type="text" name="keywords" value="<?= $edit_page ? htmlspecialchars($edit_page['keywords']) : '' ?>">
                    </div>
                    <div class="form-group" style="flex:1;">
                        <label>Canonical URL</label>
                        <input type="text" name="canonical_url" value="<?= $edit_page ? htmlspecialchars($edit_page['canonical_url']) : '' ?>">
                    </div>
                    <div class="form-group" style="flex:1;">
                        <label>Robots (e.g., index, follow)</label>
                        <input type="text" name="robots_meta" value="<?= $edit_page ? htmlspecialchars($edit_page['robots_meta']) : 'index, follow' ?>">
                    </div>
                </div>

                <div class="section-title">OpenGraph / Social Media</div>
                <div style="display:flex; gap:10px;">
                    <div class="form-group" style="flex:1;">
                        <label>OG Title</label>
                        <input type="text" name="og_title" value="<?= $edit_page ? htmlspecialchars($edit_page['og_title']) : '' ?>">
                    </div>
                    <div class="form-group" style="flex:1;">
                        <label>OG Image URL</label>
                        <input type="text" name="og_image" value="<?= $edit_page ? htmlspecialchars($edit_page['og_image']) : '' ?>">
                    </div>
                </div>
                <div class="form-group">
                    <label>OG Description</label>
                    <textarea name="og_description" rows="2"><?= $edit_page ? htmlspecialchars($edit_page['og_description']) : '' ?></textarea>
                </div>

                <div class="section-title">Advanced</div>
                
                <div style="background: #eef2ff; padding: 15px; border-radius: 4px; margin-bottom: 15px; border: 1px solid #c7d2fe;">
                    <strong>🪄 Smart Schema Builder (Auto-Generate JSON-LD)</strong>
                    <p style="font-size:12px; color:#666; margin-top:5px; margin-bottom:10px;">Select a schema type to automatically generate rich snippet code based on the Meta Title and Description you entered above.</p>
                    <div style="display:flex; gap:10px; align-items:center;">
                        <select id="schemaType" style="flex:1;">
                            <option value="Service">Service Schema (For individual service pages)</option>
                            <option value="Organization">Organization + Website (For Home Page)</option>
                            <option value="AboutPage">About Page</option>
                            <option value="ContactPage">Contact Page</option>
                            <option value="FAQPage">FAQ Page</option>
                            <option value="Course">Course (For training/cohorts)</option>
                            <option value="BlogPosting">Blog Post</option>
                        </select>
                        <button type="button" onclick="generateSchema()" style="width:auto; background:#4f46e5; padding:8px 15px;">Generate & Inject</button>
                    </div>
                </div>

                <div class="form-group">
                    <label>Custom Head Tags (JSON-LD Schema, Tracking Scripts, etc.)</label>
                    <textarea name="custom_head_tags" rows="6" style="font-family:monospace;"><?= $edit_page ? htmlspecialchars($edit_page['custom_head_tags']) : '' ?></textarea>
                </div>

                <button type="submit"><?= $edit_page ? 'Update SEO Configuration' : 'Save SEO Configuration' ?></button>
                <?php if($edit_page): ?>
                <div style="text-align:center;margin-top:10px;"><a href="index.php" style="text-decoration:none;color:#666;">Cancel Edit</a></div>
                <?php endif; ?>
            </form>
        </div>
    </div>
    <script>
        function generateSchema() {
            const type = document.getElementById('schemaType').value;
            const title = document.querySelector('input[name="meta_title"]').value || 'VenturesNodes';
            const desc = document.querySelector('textarea[name="meta_description"]').value || '';
            const url = document.querySelector('input[name="canonical_url"]').value || 'https://www.venturesnodes.com';
            
            let schema = {
                "@context": "https://schema.org"
            };

            if (type === 'Service') {
                schema["@type"] = "Service";
                schema["name"] = title.split('|')[0].trim();
                schema["provider"] = { "@type": "Organization", "name": "VenturesNodes" };
                schema["description"] = desc;
                schema["url"] = url;
                schema["areaServed"] = "India";
            } else if (type === 'Organization') {
                schema["@type"] = "Organization";
                schema["name"] = "VenturesNodes";
                schema["url"] = url;
                schema["logo"] = "https://www.venturesnodes.com/logo.png";
                schema["sameAs"] = [
                    "https://www.linkedin.com/company/venturesnodes",
                    "https://www.facebook.com/venturesnodes"
                ];
            } else if (type === 'Course') {
                schema["@type"] = "Course";
                schema["name"] = title.split('|')[0].trim();
                schema["provider"] = { "@type": "Organization", "name": "VenturesNodes" };
                schema["description"] = desc;
            } else if (type === 'BlogPosting') {
                schema["@type"] = "BlogPosting";
                schema["headline"] = title.split('|')[0].trim();
                schema["author"] = { "@type": "Organization", "name": "VenturesNodes" };
                schema["publisher"] = { "@type": "Organization", "name": "VenturesNodes" };
            } else if (type === 'FAQPage') {
                schema["@type"] = "FAQPage";
                schema["mainEntity"] = [
                    {
                        "@type": "Question",
                        "name": "What is included in this service?",
                        "acceptedAnswer": { "@type": "Answer", "text": "Please contact us for detailed information." }
                    }
                ];
            } else {
                schema["@type"] = type;
                schema["name"] = title.split('|')[0].trim();
                schema["url"] = url;
            }

            const scriptTag = `<script type="application/ld+json">\n${JSON.stringify(schema, null, 2)}\n<\/script>`;
            
            const textarea = document.querySelector('textarea[name="custom_head_tags"]');
            if (textarea.value.includes('application/ld+json')) {
                if (!confirm('A JSON-LD schema already exists in the box. Do you want to replace it?')) return;
                textarea.value = textarea.value.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/i, scriptTag);
            } else {
                textarea.value = (textarea.value + "\n\n" + scriptTag).trim();
            }
            
            alert('Schema successfully generated and injected into the Custom Head Tags box! Dont forget to save.');
        }

        // Live SEO Length Checkers
        function updateCounters() {
            const titleInput = document.getElementById('meta_title_input');
            const descInput = document.getElementById('meta_desc_input');
            const titleCounter = document.getElementById('title_counter');
            const descCounter = document.getElementById('desc_counter');

            if(titleInput && titleCounter) {
                const len = titleInput.value.length;
                const estPixels = len * 9; // Rough estimate 9px per char
                let color = '#666';
                let msg = '';
                if(len > 60 || estPixels > 580) { color = '#ef4444'; msg = ' (Too long! Keep under 60 chars / 580px)'; }
                else if(len > 0) { color = '#10b981'; msg = ' (Good length)'; }
                titleCounter.innerHTML = `<span style="color:${color}">Length: ${len} chars / ~${estPixels} px ${msg}</span>`;
            }

            if(descInput && descCounter) {
                const len = descInput.value.length;
                const estPixels = len * 6; // Rough estimate 6px per char
                let color = '#666';
                let msg = '';
                if(len > 155 || estPixels > 920) { color = '#ef4444'; msg = ' (Too long! Keep under 155 chars / 920px)'; }
                else if(len > 0) { color = '#10b981'; msg = ' (Good length)'; }
                descCounter.innerHTML = `<span style="color:${color}">Length: ${len} chars / ~${estPixels} px ${msg}</span>`;
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            const titleInput = document.getElementById('meta_title_input');
            const descInput = document.getElementById('meta_desc_input');
            if(titleInput) titleInput.addEventListener('input', updateCounters);
            if(descInput) descInput.addEventListener('input', updateCounters);
            updateCounters(); // Run on load
        });
        
    </script>
</body>
</html>
