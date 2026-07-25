<?php
$db_file = __DIR__ . '/seo.sqlite';
$db = new PDO('sqlite:' . $db_file);
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$db->exec("CREATE TABLE IF NOT EXISTS pages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    url_slug TEXT UNIQUE,
    target_html_file TEXT,
    meta_title TEXT,
    meta_description TEXT,
    keywords TEXT,
    canonical_url TEXT,
    og_title TEXT,
    og_description TEXT,
    og_image TEXT,
    robots_meta TEXT,
    custom_head_tags TEXT,
    is_redirect INTEGER DEFAULT 0,
    redirect_url TEXT
)");

// Create admin users table
$db->exec("CREATE TABLE IF NOT EXISTS admin_users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password_hash TEXT
)");

// Insert default admin if not exists
$stmt = $db->prepare("SELECT id FROM admin_users WHERE username = 'admin'");
$stmt->execute();
if (!$stmt->fetch()) {
    $hash = password_hash('admin123', PASSWORD_DEFAULT);
    $insert = $db->prepare("INSERT INTO admin_users (username, password_hash) VALUES (?, ?)");
    $insert->execute(['admin', $hash]);
    echo "Default admin user created (admin / admin123).<br>";
}
// Auto-populate all pages so the SEO team doesn't have to manually create them
$seed_pages = [
    ['/', 'Home | VenturesNodes'],
    ['/about', 'About Us | VenturesNodes'],
    ['/contact', 'Contact Us | VenturesNodes'],
    ['/faq', 'Frequently Asked Questions | VenturesNodes'],
    ['/services', 'Our Services | VenturesNodes'],
    ['/services/agri-preneur-cohort', 'Agri-Preneur Cohort | VenturesNodes'],
    ['/services/seed-fund', 'Seed Fund | VenturesNodes'],
    ['/services/rkvy-raftaar', 'RKVY RAFTAAR | VenturesNodes'],
    ['/services/textile-grants', 'Textile Grants | VenturesNodes'],
    ['/services/cgtmse-scheme', 'CGTMSE Scheme | VenturesNodes'],
    ['/services/samridh-scheme', 'Samridh Scheme | VenturesNodes'],
    ['/services/pmmy-scheme', 'PMMY Scheme | VenturesNodes'],
    ['/services/pmegp-scheme', 'PMEGP Scheme | VenturesNodes'],
    ['/services/start-one-person-company', 'Start One Person Company | VenturesNodes'],
    ['/services/register-llp', 'Register LLP in 15 Days | VenturesNodes'],
    ['/services/section-8-company', 'Section 8 Company | VenturesNodes'],
    ['/services/register-private-limited', 'Register Private Limited | VenturesNodes'],
    ['/services/register-partnership', 'Register Partnership | VenturesNodes'],
    ['/services/12a-80g-registration', 'Get 12A and 80G | VenturesNodes'],
    ['/services/enhance-credibility-zed', 'Enhance Credibility ZED | VenturesNodes'],
    ['/services/iso-certification', 'ISO Certification | VenturesNodes'],
    ['/services/gst-registered', 'GST Registration | VenturesNodes'],
    ['/services/manufacturing-funding', 'Manufacturing Funding | VenturesNodes'],
    ['/services/trading-business-boost', 'Boost Trading Business | VenturesNodes'],
    ['/services/labour-id-registration', 'Labour ID Registration | VenturesNodes'],
    ['/services/web-development', 'Custom Web Development | VenturesNodes'],
    ['/services/mobile-app-development', 'Mobile App Development | VenturesNodes'],
    ['/services/mvp-development', 'MVP Development | VenturesNodes'],
    ['/services/ui-ux-design', 'UI/UX Design & Prototyping | VenturesNodes'],
    ['/services/cloud-infrastructure', 'Cloud Infrastructure | VenturesNodes'],
    ['/services/custom-ai-chatbots', 'Custom AI Chatbots | VenturesNodes'],
    ['/services/ai-workflow-automation', 'AI Workflow Automation | VenturesNodes'],
    ['/services/predictive-analytics', 'Predictive Analytics | VenturesNodes'],
    ['/services/ai-readiness-audit', 'AI Readiness Audit | VenturesNodes'],
    ['/services/custom-ai-voice-agents', 'Custom AI Voice Agents | VenturesNodes'],
    ['/services/ai-powered-ads', 'AI Powered Ads | VenturesNodes'],
    ['/services/seo-services', 'Search Engine Optimization (SEO) | VenturesNodes'],
    ['/services/social-media', 'Social Media Management | VenturesNodes'],
    ['/services/performance-marketing', 'Performance Marketing | VenturesNodes'],
    ['/services/b2b-lead-generation', 'B2B Lead Generation | VenturesNodes'],
    ['/services/brand-identity', 'Brand Identity Setup | VenturesNodes'],
    ['/services/influencer-marketing', 'Influencer Marketing | VenturesNodes'],
    ['/services/dpiit-registration', 'DPIIT Startup India Registration | VenturesNodes'],
    ['/services/pitch-deck-creation', 'Pitch Deck & Financial Modeling | VenturesNodes'],
    ['/services/virtual-cfo', 'Virtual CFO Services | VenturesNodes'],
    ['/services/trademark-registration', 'Trademark & IP Registration | VenturesNodes']
];

$seed_stmt = $db->prepare("INSERT OR IGNORE INTO pages (url_slug, meta_title, meta_description, keywords, canonical_url, og_title, og_description, og_image, robots_meta) VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'index, follow')");

$base_url = "https://venturesnodes.com";
$default_image = $base_url . "/logo.png";

foreach ($seed_pages as $page) {
    $slug = $page[0];
    $title = $page[1];
    
    // Extract core name without "| VenturesNodes"
    $core_name = trim(str_replace('| VenturesNodes', '', $title));
    
    // Generate intelligent default SEO descriptions and keywords
    if ($slug === '/') {
        $desc = "VenturesNodes is India's premier startup consultancy. We specialize in government grants, company compliance, IT development, AI solutions, and scaling businesses.";
        $keywords = "startup consultancy india, dpiit registration, msme funding, business growth, venturesnodes, legal compliance";
    } elseif ($slug === '/about') {
        $desc = "Learn about VenturesNodes. We are a dedicated team of expert consultants, developers, and marketers helping Indian startups and MSMEs achieve rapid growth.";
        $keywords = "about venturesnodes, startup consultants india, business growth experts";
    } elseif ($slug === '/services') {
        $desc = "Explore VenturesNodes services: from Government Grants and Seed Funds to Custom IT Development, AI Automation, and Legal Compliance.";
        $keywords = "startup services, government grants india, it development, ai automation, legal compliance services";
    } else {
        $desc = "VenturesNodes provides expert services in {$core_name}. We help Indian startups and MSMEs scale with professional consulting, compliance, and funding assistance.";
        $keywords = strtolower($core_name) . ", startup consulting india, business registration, venturesnodes, msme support";
    }
    
    $canonical = $base_url . ($slug === '/' ? '' : $slug);
    $og_title = $title;
    $og_desc = $desc;

    if (isset($_GET['force_update'])) {
        $update_stmt = $db->prepare("UPDATE pages SET meta_description=?, keywords=?, canonical_url=?, og_title=?, og_description=?, og_image=? WHERE url_slug=?");
        $update_stmt->execute([$desc, $keywords, $canonical, $og_title, $og_desc, $default_image, $slug]);
    } else {
        $seed_stmt->execute([
            $slug, 
            $title, 
            $desc, 
            $keywords, 
            $canonical, 
            $og_title, 
            $og_desc, 
            $default_image
        ]);
    }
}

if (isset($_GET['force_update'])) {
    echo "Database forcibly updated with new detailed descriptions for 46 pages successfully.<br>";
} else {
    echo "Database initialized with complete Advanced SEO capabilities and prepopulated with 46 pages successfully.<br>";
}
?>
