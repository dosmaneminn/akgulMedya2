import * as LucideIcons from 'lucide-react'

// Map string icon names to Lucide components
const iconMap = {
    // Services
    'qr-code': LucideIcons.QrCode,
    'drone': LucideIcons.Plane,
    'globe': LucideIcons.Globe,
    'video': LucideIcons.Video,
    'workflow': LucideIcons.Workflow,
    'camera': LucideIcons.Camera,
    'share': LucideIcons.Share2,
    'megaphone': LucideIcons.Megaphone,
    'search': LucideIcons.Search,
    'star': LucideIcons.Star,
    'pen-tool': LucideIcons.PenTool,
    'briefcase': LucideIcons.Briefcase,

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
    'palette': LucideIcons.Palette,
    'award': LucideIcons.Award,
    'heart': LucideIcons.Heart,

    // Default
    'circle': LucideIcons.Circle
}

function Icon({ name, size = 24, className = '', strokeWidth = 1.5 }) {
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
