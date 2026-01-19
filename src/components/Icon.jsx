import * as LucideIcons from 'lucide-react'
import {
    FaQrcode,
    FaPlane,
    FaGlobe,
    FaVideo,
    FaRobot,
    FaCamera,
    FaHashtag,
    FaBullhorn,
    FaChartLine,
    FaStar,
    FaPalette,
    FaCrown
} from 'react-icons/fa'

// Map string icon names to components
const iconMap = {
    // Services - FontAwesome Updates
    'qrCode': FaQrcode,
    'plane': FaPlane,
    'globe': FaGlobe,
    'video': FaVideo,
    'robot': FaRobot,
    'camera': FaCamera,
    'hashtag': FaHashtag,
    'bullhorn': FaBullhorn,
    'chartLine': FaChartLine,
    'star': FaStar,
    'palette': FaPalette,
    'crown': FaCrown,

    // Old mappings for backward compatibility or if used elsewhere
    'qr-code': FaQrcode,
    'drone': FaPlane,
    'web-design': FaGlobe,
    'production': FaVideo,
    'n8n-automation': FaRobot,
    'photo-video': FaCamera,
    'social-media': FaHashtag,
    'meta-ads': FaBullhorn,
    'seo': FaChartLine,
    'google-reviews': FaStar,
    'logo-design': FaPalette,
    'brand-management': FaCrown,

    // Contact
    'map-pin': LucideIcons.MapPin,
    'mail': LucideIcons.Mail,
    'phone': LucideIcons.Phone,
    'clock': LucideIcons.Clock,

    // Social
    'instagram': LucideIcons.Instagram,
    'facebook': LucideIcons.Facebook,
    'twitter': LucideIcons.Twitter,
    'linkedin': LucideIcons.Linkedin,
    'whatsapp': LucideIcons.MessageCircle,
    'message-circle': LucideIcons.MessageCircle,

    // About/Values
    'target': LucideIcons.Target,
    'lightbulb': LucideIcons.Lightbulb,
    'zap': LucideIcons.Zap,
    'bar-chart': LucideIcons.BarChart3,
    'users': LucideIcons.Users,
    'shield': LucideIcons.Shield,
    'sparkles': LucideIcons.Sparkles,
    'award': LucideIcons.Award,
    'heart': LucideIcons.Heart,

    // Default
    'circle': LucideIcons.Circle
}

// Custom WhatsApp Icon Component
const WhatsAppIcon = ({ size, className, strokeWidth }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .57 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.03 12.03 0 0 0 2.81.57A2 2 0 0 1 22 16.92z" />
        <path d="M17.5 12a5.5 5.5 0 1 0-3.9 9.4 5.5 5.5 0 0 0 3.9-9.4z" opacity="0.1" />
        {/* Using a simpler phone-like representation but replacing with actual WhatsApp-like distinct shape if needed. 
            User asked for "real whatsapp icon". The MessageCircle from Lucide is close but generic.
            Let's use a path that mimics the official logo shape more closely if simple phone isn't enough.
            Actually, let's use a proper SVG path for WhatsApp brand icon.
        */}
        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
        <path d="M9 10a0.5 .5 0 0 0 1 0V9a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" stroke="none" />
    </svg>
)

// Better WhatsApp SVG path
const BrandWhatsApp = ({ size, className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor" /* changed to currentColor so it takes the text color */
        className={className}
    >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
)

function Icon({ name, size = 24, className = '', strokeWidth = 1.5 }) {
    // Check for custom WhatsApp icon
    if (name === 'whatsapp' || name === 'message-circle') {
        return <BrandWhatsApp size={size} className={className} />
    }

    const IconComponent = iconMap[name] || iconMap['circle']

    return (
        <IconComponent
            size={size}
            className={className}
            strokeWidth={strokeWidth}
        />
    )
}

export default Icon
