-- =============================================
-- AkgulMedya Veritabani
-- Hostinger MySQL icin
-- =============================================

CREATE DATABASE IF NOT EXISTS akgulmedya_db
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

USE akgulmedya_db;

-- =============================================
-- Iletisim Formu Mesajlari
-- =============================================
CREATE TABLE IF NOT EXISTS contact_messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    phone VARCHAR(30) DEFAULT NULL,
    subject VARCHAR(100) NOT NULL,
    message TEXT NOT NULL,
    is_read TINYINT(1) DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =============================================
-- Site Ayarlari
-- =============================================
CREATE TABLE IF NOT EXISTS site_settings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    setting_key VARCHAR(100) NOT NULL UNIQUE,
    setting_value TEXT DEFAULT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Varsayilan site ayarlari
INSERT INTO site_settings (setting_key, setting_value) VALUES
    ('site_name', 'AkgulMedya'),
    ('site_title', 'Dijital Ajans'),
    ('site_description', 'Markanizi dijital dunyada zirveye tasiyoruz.'),
    ('contact_email', 'akgulmedya7@gmail.com'),
    ('contact_phone', '+90 530 176 48 35'),
    ('contact_address', 'Mugla, Turkiye'),
    ('whatsapp_url', 'https://wa.me/905301764835'),
    ('instagram_url', 'https://www.instagram.com/whiterosedijital/'),
    ('working_hours', 'Pazartesi - Cuma: 09:00 - 18:00');
