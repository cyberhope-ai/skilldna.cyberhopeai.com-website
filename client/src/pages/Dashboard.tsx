/**
 * SkillDNA Dashboard - Futuristic CyberHope-Style Profile Interface
 * 
 * Design Philosophy: NASA command center meets sci-fi holographic interface
 * - Left sidebar navigation with profile menu items
 * - Central holographic eye-catcher element
 * - Multiple gauges, graphs, and data widgets
 * - Dark blue/cyan aesthetic with glowing accents
 * - SkillIQ Verified Skills with YouTube Studio-style grid
 */

import { useState } from 'react';
import { Link } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import {
  User, Brain, Target, Briefcase, Award, FileText, Settings, Bell,
  ChevronRight, ChevronDown, Home, BarChart3, Zap, Shield, Users,
  TrendingUp, Activity, Cpu, Database, Globe, Star, Heart, Compass,
  BookOpen, Lightbulb, Rocket, Eye, Volume2, X, Play, Pause,
  CircleDot, Hexagon, Triangle, Square, Diamond, Sparkles, Flame,
  CheckCircle2, Video, GraduationCap, Code, Network, Lock, Gamepad2,
  Building, ExternalLink
} from 'lucide-react';

// Navigation items for left sidebar
const navItems = [
  { id: 'overview', label: 'Overview', icon: Home, badge: null },
  { id: 'identity', label: 'Identity Core', icon: User, badge: null },
  { id: 'cognition', label: 'Cognition', icon: Brain, badge: '98%' },
  { id: 'behavior', label: 'Behavior', icon: Activity, badge: null },
  { id: 'motivation', label: 'Motivation', icon: Target, badge: '5.5' },
  { id: 'interests', label: 'Interests', icon: Heart, badge: '12' },
  { id: 'skills', label: 'Skills Matrix', icon: Zap, badge: '47' },
  { id: 'companies', label: 'Companies', icon: Briefcase, badge: '20+' },
  { id: 'assessments', label: 'Assessments', icon: FileText, badge: '86' },
  { id: 'achievements', label: 'Achievements', icon: Award, badge: '24' },
  { id: 'network', label: 'Network', icon: Users, badge: null },
  { id: 'analytics', label: 'Analytics', icon: BarChart3, badge: null },
  { id: 'settings', label: 'Settings', icon: Settings, badge: null },
];

// Companies data from arcadeinventors.com
const companiesData = [
  {
    id: 'dreamauthentics',
    name: 'DreamAuthentics',
    founded: 1999,
    description: 'First customized Personal Video Arcades. For over 20 years defining the industry for the most authentic retro gaming experiences on the planet.',
    website: 'dreamauthentics.com',
    logo: '/manus-storage/irecord-logo_e2bcca70.png',
    category: 'Gaming/Entertainment'
  },
  {
    id: 'irecord',
    name: 'iRecord',
    founded: 2005,
    description: 'Enterprise Interview Recording System. Industry standard with thousands of installations globally. Leaders in interview room recording for Child Advocacy Centers and law enforcement.',
    website: 'irecord.com',
    logo: '/manus-storage/irecord-logo_e2bcca70.png',
    category: 'Enterprise Software'
  },
  {
    id: 'lan-network',
    name: 'The LAN Network',
    founded: 2006,
    description: 'Gaming network and esports platform connecting gamers worldwide for competitive and casual play.',
    website: 'thelannetwork.com',
    logo: null,
    category: 'Gaming/Esports'
  },
  {
    id: 'hope-training',
    name: 'Hope Training Academy',
    founded: 2008,
    description: 'Training over 2,000 students including Tyler "Ninja" Blevins. Professional gaming and esports education.',
    website: 'hopetrainingacademy.com',
    logo: null,
    category: 'Education'
  },
  {
    id: 'cyberhopeai',
    name: 'CyberHopeAI',
    founded: 2023,
    description: 'AI-powered human potential platform. Parent company of SkillDNA and PrecognitionOS.',
    website: 'cyberhopeai.com',
    logo: null,
    category: 'AI/Technology'
  },
  {
    id: 'skilldna',
    name: 'SkillDNA',
    founded: 2024,
    description: 'World\'s first Human Potential Dashboard. A living profile that turns scattered assessments into a single, evolving capability genome.',
    website: 'skilldna.com',
    logo: null,
    category: 'HR Tech'
  },
  {
    id: 'precognitionos',
    name: 'PrecognitionOS',
    founded: 2024,
    description: 'AI operating system powering SkillDNA. Advanced pattern recognition and human potential analysis.',
    website: 'precognitionos.com',
    logo: null,
    category: 'AI Platform'
  },
  {
    id: 'skilliq',
    name: 'SkillIQ',
    founded: 2024,
    description: 'Verified skills assessment and certification platform. Blockchain-backed proof of competency.',
    website: 'skilliq.com',
    logo: null,
    category: 'Verification'
  },
];

// SkillIQ Verified Skills categories
const skillIQCategories = [
  { id: 'networking', name: 'Networking', icon: Network, count: 12, verified: 8 },
  { id: 'cybersecurity', name: 'CyberSecurity', icon: Lock, count: 8, verified: 5 },
  { id: 'coding', name: 'Coding', icon: Code, count: 15, verified: 12 },
  { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, count: 10, verified: 7 },
  { id: 'video-editing', name: 'Video Editing', icon: Video, count: 6, verified: 4 },
  { id: 'gaming', name: 'Video Game High Scores', icon: Gamepad2, count: 24, verified: 24 },
  { id: 'high-school', name: 'High School', icon: GraduationCap, count: 4, verified: 4 },
  { id: 'college', name: 'College', icon: Building, count: 3, verified: 3 },
  { id: 'certifications', name: 'Certifications', icon: Award, count: 18, verified: 15 },
];

// Sample verified skill videos
const verifiedSkillVideos = [
  { id: 1, title: 'AWS Solutions Architect Certification', category: 'Certifications', duration: '45:00', views: '2.3K', verified: true, thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=320&h=180&fit=crop' },
  { id: 2, title: 'Python Advanced Programming', category: 'Coding', duration: '32:15', views: '1.8K', verified: true, thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=320&h=180&fit=crop' },
  { id: 3, title: 'Network Security Fundamentals', category: 'CyberSecurity', duration: '28:30', views: '956', verified: true, thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=320&h=180&fit=crop' },
  { id: 4, title: 'Machine Learning with TensorFlow', category: 'AI & Machine Learning', duration: '1:12:00', views: '3.1K', verified: true, thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=320&h=180&fit=crop' },
  { id: 5, title: 'Pac-Man World Record Attempt', category: 'Video Game High Scores', duration: '2:45:00', views: '12.4K', verified: true, thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=320&h=180&fit=crop' },
  { id: 6, title: 'Adobe Premiere Pro Mastery', category: 'Video Editing', duration: '55:00', views: '1.2K', verified: true, thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=320&h=180&fit=crop' },
  { id: 7, title: 'CCNA Routing & Switching', category: 'Networking', duration: '1:30:00', views: '2.8K', verified: true, thumbnail: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=320&h=180&fit=crop' },
  { id: 8, title: 'Donkey Kong High Score Run', category: 'Video Game High Scores', duration: '1:15:00', views: '8.7K', verified: true, thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=320&h=180&fit=crop' },
];

// Skill metrics for gauges
const skillMetrics = [
  { name: 'Abstract Reasoning', value: 98, color: '#00d4ff' },
  { name: 'Pattern Recognition', value: 95, color: '#00ff88' },
  { name: 'Systems Thinking', value: 92, color: '#ff00ff' },
  { name: 'Innovation Drive', value: 97, color: '#ffaa00' },
  { name: 'Visual Memory', value: 88, color: '#00ffcc' },
  { name: 'Strategic Planning', value: 94, color: '#ff6600' },
];

// Leadership scores
const leadershipScores = [
  { name: 'Visionary', score: 95 },
  { name: 'Innovator', score: 92 },
  { name: 'Developer', score: 88 },
  { name: 'Motivator', score: 85 },
];

// Circular Gauge Component
function CircularGauge({ value, label, color, size = 80 }: { value: number; label: string; color: string; size?: number }) {
  const radius = (size - 10) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / 100) * circumference;
  
  return (
    <div className="flex flex-col items-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="transform -rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="4"
          />
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ filter: `drop-shadow(0 0 6px ${color})` }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold" style={{ color }}>{value}%</span>
        </div>
      </div>
      <span className="text-xs text-gray-400 mt-1 text-center max-w-[80px]">{label}</span>
    </div>
  );
}

// Horizontal Bar Component
function HorizontalBar({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-xs">
        <span className="text-gray-400">{label}</span>
        <span style={{ color }}>{value}%</span>
      </div>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color, boxShadow: `0 0 10px ${color}` }}
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

// Mini Stat Card
function MiniStat({ icon: Icon, label, value, color }: { icon: any; label: string; value: string; color: string }) {
  return (
    <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-3 backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-1">
        <Icon className="w-4 h-4" style={{ color }} />
        <span className="text-xs text-gray-500">{label}</span>
      </div>
      <div className="text-xl font-bold" style={{ color }}>{value}</div>
    </div>
  );
}

// Video Card Component for SkillIQ
function VideoCard({ video }: { video: typeof verifiedSkillVideos[0] }) {
  return (
    <motion.div
      className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden hover:border-cyan-500/50 transition-all cursor-pointer group"
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative aspect-video">
        <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
            <Play className="w-6 h-6 text-white ml-1" />
          </div>
        </div>
        <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 rounded text-xs">
          {video.duration}
        </div>
        {video.verified && (
          <div className="absolute top-2 left-2 px-2 py-1 bg-green-500/90 rounded text-xs flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" />
            Verified
          </div>
        )}
      </div>
      <div className="p-3">
        <h4 className="text-sm font-medium truncate">{video.title}</h4>
        <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
          <span>{video.category}</span>
          <span>{video.views} views</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Dashboard() {
  const [activeNav, setActiveNav] = useState('overview');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [showAudioModal, setShowAudioModal] = useState(false);
  const [showCompaniesModal, setShowCompaniesModal] = useState(false);
  const [showSkillIQDropdown, setShowSkillIQDropdown] = useState(false);
  const [selectedSkillCategory, setSelectedSkillCategory] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#0a0a12] text-white flex">
      {/* Left Sidebar Navigation */}
      <motion.aside
        className={`${sidebarCollapsed ? 'w-16' : 'w-64'} bg-[#0d0d18] border-r border-cyan-900/30 flex flex-col transition-all duration-300 fixed h-full z-40`}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo */}
        <div className="p-4 border-b border-cyan-900/30">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
              <Hexagon className="w-6 h-6 text-white" />
            </div>
            {!sidebarCollapsed && (
              <div>
                <span className="font-bold text-lg">Skill<span className="text-cyan-400">DNA</span></span>
                <p className="text-[10px] text-gray-500">by CyberHopeAI</p>
              </div>
            )}
          </Link>
        </div>

        {/* Profile Mini Card */}
        {!sidebarCollapsed && (
          <div className="p-4 border-b border-cyan-900/30">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src="/manus-storage/rick-headshot-profile_cb6fe28f.png"
                  alt="Rick Barretto"
                  className="w-12 h-12 rounded-full object-cover border-2 border-cyan-500"
                />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-[#0d0d18]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm truncate">Rick Barretto</p>
                <p className="text-xs text-cyan-400 truncate">Human Protocol Architect</p>
              </div>
            </div>
          </div>
        )}

        {/* SkillIQ Verified Skills - Special Large Item */}
        {!sidebarCollapsed && (
          <div className="p-3 border-b border-cyan-900/30">
            <button
              onClick={() => setShowSkillIQDropdown(!showSkillIQDropdown)}
              className="w-full p-3 rounded-xl bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-500/30 hover:border-green-400 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-cyan-500 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 text-left">
                  <p className="font-bold text-green-400">SkillIQ</p>
                  <p className="text-xs text-gray-400">Verified Skills</p>
                </div>
                <ChevronDown className={`w-5 h-5 text-green-400 transition-transform ${showSkillIQDropdown ? 'rotate-180' : ''}`} />
              </div>
            </button>
            
            {/* SkillIQ Dropdown */}
            <AnimatePresence>
              {showSkillIQDropdown && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="mt-2 space-y-1 max-h-48 overflow-y-auto">
                    {skillIQCategories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedSkillCategory(cat.id)}
                        className={`w-full flex items-center gap-2 p-2 rounded-lg text-xs transition-colors ${
                          selectedSkillCategory === cat.id
                            ? 'bg-green-500/20 text-green-400'
                            : 'hover:bg-gray-800/50 text-gray-400'
                        }`}
                      >
                        <cat.icon className="w-4 h-4" />
                        <span className="flex-1 text-left truncate">{cat.name}</span>
                        <span className="text-green-400">{cat.verified}/{cat.count}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* Navigation Items */}
        <nav className="flex-1 overflow-y-auto py-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveNav(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 transition-all ${
                activeNav === item.id
                  ? 'bg-cyan-500/10 border-r-2 border-cyan-400 text-cyan-400'
                  : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'
              }`}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {!sidebarCollapsed && (
                <>
                  <span className="flex-1 text-left text-sm">{item.label}</span>
                  {item.badge && (
                    <span className="px-2 py-0.5 text-xs rounded-full bg-cyan-500/20 text-cyan-400">
                      {item.badge}
                    </span>
                  )}
                </>
              )}
            </button>
          ))}
        </nav>

        {/* Collapse Toggle */}
        <button
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          className="p-4 border-t border-cyan-900/30 text-gray-500 hover:text-white transition-colors"
        >
          <ChevronRight className={`w-5 h-5 transition-transform ${sidebarCollapsed ? '' : 'rotate-180'}`} />
        </button>
      </motion.aside>

      {/* Main Content Area */}
      <main className={`flex-1 ${sidebarCollapsed ? 'ml-16' : 'ml-64'} transition-all duration-300`}>
        {/* Powered by PrecognitionOS Banner */}
        <div className="bg-gradient-to-r from-purple-900/30 via-cyan-900/30 to-purple-900/30 border-b border-cyan-500/20 py-2 text-center">
          <span className="text-sm text-gray-400">Powered by </span>
          <span className="text-sm font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            PrecognitionOS
          </span>
          <span className="text-sm text-gray-500 ml-2">• AI-Driven Human Potential Analysis</span>
        </div>

        {/* Top Bar */}
        <header className="h-16 bg-[#0d0d18]/80 backdrop-blur-md border-b border-cyan-900/30 flex items-center justify-between px-6 sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold">
              <span className="text-gray-400">SkillDNA</span>
              <span className="text-cyan-400 mx-2">/</span>
              <span>Rick Barretto</span>
            </h1>
            <span className="px-3 py-1 text-xs rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
              ACTIVE
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowAudioModal(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 hover:border-cyan-400 transition-colors"
            >
              <Volume2 className="w-4 h-4 text-cyan-400" />
              <span className="text-sm">Listen to Profile</span>
            </button>
            <button className="relative p-2 rounded-lg hover:bg-gray-800 transition-colors">
              <Bell className="w-5 h-5 text-gray-400" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-cyan-400 rounded-full" />
            </button>
            <button className="p-2 rounded-lg hover:bg-gray-800 transition-colors">
              <Settings className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </header>

        {/* Dashboard Grid */}
        <div className="p-6">
          <div className="grid grid-cols-12 gap-6">
            
            {/* Left Column - Stats */}
            <div className="col-span-3 space-y-6">
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-3">
                <MiniStat icon={Briefcase} label="Companies" value="20+" color="#00d4ff" />
                <MiniStat icon={Award} label="Patents" value="84+" color="#ff00ff" />
                <MiniStat icon={FileText} label="Assessments" value="86" color="#00ff88" />
                <MiniStat icon={Star} label="Years" value="25+" color="#ffaa00" />
              </div>

              {/* Leadership Scores */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 backdrop-blur-sm">
                <h3 className="text-sm font-semibold text-gray-300 mb-4 flex items-center gap-2">
                  <Compass className="w-4 h-4 text-cyan-400" />
                  Leadership Styles
                </h3>
                <div className="space-y-3">
                  {leadershipScores.map((item, i) => (
                    <HorizontalBar
                      key={item.name}
                      label={item.name}
                      value={item.score}
                      color={['#00d4ff', '#00ff88', '#ff00ff', '#ffaa00'][i]}
                    />
                  ))}
                </div>
              </div>

              {/* Core Motivations */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 backdrop-blur-sm">
                <h3 className="text-sm font-semibold text-gray-300 mb-4 flex items-center gap-2">
                  <Target className="w-4 h-4 text-purple-400" />
                  Core Motivations
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-cyan-400" />
                      <span className="text-sm">Make It Work</span>
                    </div>
                    <span className="text-cyan-400 font-bold">5.5</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
                    <div className="flex items-center gap-2">
                      <Compass className="w-4 h-4 text-purple-400" />
                      <span className="text-sm">Explore</span>
                    </div>
                    <span className="text-purple-400 font-bold">5.0</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-amber-500/10 border border-amber-500/20">
                    <div className="flex items-center gap-2">
                      <Rocket className="w-4 h-4 text-amber-400" />
                      <span className="text-sm">Make an Impact</span>
                    </div>
                    <span className="text-amber-400 font-bold">4.8</span>
                  </div>
                </div>
              </div>

              {/* SkillIQ Verified Skills Preview */}
              <div className="bg-gradient-to-br from-green-900/30 to-cyan-900/30 border border-green-500/30 rounded-xl p-4 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold text-green-400 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    SkillIQ Verified
                  </h3>
                  <span className="text-xs text-gray-400">82 verified</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {skillIQCategories.slice(0, 6).map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedSkillCategory(cat.id)}
                      className="p-2 rounded-lg bg-gray-800/50 hover:bg-green-500/20 transition-colors text-center"
                    >
                      <cat.icon className="w-5 h-5 mx-auto mb-1 text-green-400" />
                      <p className="text-[10px] text-gray-400 truncate">{cat.name}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Center Column - Holographic Core */}
            <div className="col-span-6 space-y-6">
              {/* Central Holographic Element */}
              <div className="relative bg-gradient-to-br from-gray-900/80 to-[#0a0a12] border border-cyan-900/30 rounded-2xl p-8 overflow-hidden">
                {/* Animated Background Grid */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `
                      linear-gradient(rgba(0,212,255,0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(0,212,255,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px'
                  }} />
                </div>

                {/* Glowing Orbs */}
                <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

                {/* Central Hologram */}
                <div className="relative flex flex-col items-center justify-center py-8">
                  {/* Outer Ring */}
                  <motion.div
                    className="absolute w-72 h-72 rounded-full border-2 border-cyan-500/30"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    style={{ boxShadow: '0 0 30px rgba(0,212,255,0.2)' }}
                  />
                  
                  {/* Middle Ring */}
                  <motion.div
                    className="absolute w-56 h-56 rounded-full border border-purple-500/40"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  />

                  {/* Inner Ring */}
                  <motion.div
                    className="absolute w-40 h-40 rounded-full border border-cyan-400/50"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  />

                  {/* Core Element */}
                  <motion.div
                    className="relative w-32 h-32 rounded-full bg-gradient-to-br from-cyan-500/30 to-purple-600/30 flex items-center justify-center backdrop-blur-sm border border-cyan-400/50"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    style={{ boxShadow: '0 0 50px rgba(0,212,255,0.4), inset 0 0 30px rgba(0,212,255,0.2)' }}
                  >
                    <img
                      src="/manus-storage/rick-headshot-profile_cb6fe28f.png"
                      alt="Rick Barretto"
                      className="w-24 h-24 rounded-full object-cover"
                    />
                  </motion.div>

                  {/* Floating Data Points */}
                  {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                    <motion.div
                      key={angle}
                      className="absolute w-3 h-3 rounded-full"
                      style={{
                        backgroundColor: ['#00d4ff', '#ff00ff', '#00ff88', '#ffaa00', '#00ffcc', '#ff6600'][i],
                        boxShadow: `0 0 10px ${['#00d4ff', '#ff00ff', '#00ff88', '#ffaa00', '#00ffcc', '#ff6600'][i]}`,
                        transform: `rotate(${angle}deg) translateY(-140px)`
                      }}
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    />
                  ))}
                </div>

                {/* Profile Info Below Hologram */}
                <div className="relative text-center mt-4">
                  <h2 className="text-2xl font-bold mb-1">Rick Barretto</h2>
                  <p className="text-cyan-400 font-medium mb-2">The Human Protocol Architect</p>
                  <p className="text-sm text-gray-400 max-w-md mx-auto">
                    A systems thinker who architects protocols for human capability and potential
                  </p>
                </div>

                {/* Skill Indicator Bars */}
                <div className="relative grid grid-cols-3 gap-4 mt-8">
                  {skillMetrics.slice(0, 3).map((skill) => (
                    <div key={skill.name} className="text-center">
                      <div className="h-1 bg-gray-800 rounded-full overflow-hidden mb-2">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ backgroundColor: skill.color }}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.value}%` }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                        />
                      </div>
                      <p className="text-xs text-gray-500">{skill.name}</p>
                      <p className="text-sm font-bold" style={{ color: skill.color }}>{skill.value}%</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cognitive Gauges Row */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-sm font-semibold text-gray-300 mb-6 flex items-center gap-2">
                  <Brain className="w-4 h-4 text-cyan-400" />
                  Cognitive Architecture
                </h3>
                <div className="flex justify-around">
                  {skillMetrics.map((skill) => (
                    <CircularGauge
                      key={skill.name}
                      value={skill.value}
                      label={skill.name}
                      color={skill.color}
                    />
                  ))}
                </div>
              </div>

              {/* SkillIQ Video Grid */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                    SkillIQ Verified Proof
                  </h3>
                  <div className="flex items-center gap-2">
                    <select 
                      className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-1 text-sm"
                      value={selectedSkillCategory || ''}
                      onChange={(e) => setSelectedSkillCategory(e.target.value || null)}
                    >
                      <option value="">All Categories</option>
                      {skillIQCategories.map((cat) => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {verifiedSkillVideos.slice(0, 4).map((video) => (
                    <VideoCard key={video.id} video={video} />
                  ))}
                </div>
                <button className="w-full mt-4 py-2 rounded-lg bg-green-500/20 border border-green-500/30 text-green-400 hover:bg-green-500/30 transition-colors text-sm">
                  View All Verified Skills →
                </button>
              </div>
            </div>

            {/* Right Column - Activity & More */}
            <div className="col-span-3 space-y-6">
              {/* Superpowers */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 backdrop-blur-sm">
                <h3 className="text-sm font-semibold text-gray-300 mb-4 flex items-center gap-2">
                  <Flame className="w-4 h-4 text-amber-400" />
                  Superpower Stack
                </h3>
                <div className="space-y-2">
                  {['Abstract Pattern Recognition', 'Objective Analysis', 'Practical Implementation'].map((power) => (
                    <div key={power} className="flex items-center gap-2 p-2 rounded-lg bg-gradient-to-r from-amber-500/10 to-transparent border border-amber-500/20">
                      <Diamond className="w-4 h-4 text-amber-400" />
                      <span className="text-sm">{power}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Growth Areas */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 backdrop-blur-sm">
                <h3 className="text-sm font-semibold text-gray-300 mb-4 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-purple-400" />
                  Growth Areas
                </h3>
                <div className="space-y-2">
                  {['Multi-Project Processing', 'High-Emotion Environments', 'Social Focus'].map((area) => (
                    <div key={area} className="flex items-center gap-2 p-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
                      <Triangle className="w-4 h-4 text-purple-400" />
                      <span className="text-sm text-gray-400">{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Unique Contribution */}
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-cyan-400 mb-2 text-sm">Unique Contribution</h3>
                    <p className="text-gray-300 text-xs leading-relaxed">
                      "Rick Barretto will systematize human potential development with the same rigor applied to network protocols..."
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 backdrop-blur-sm">
                <h3 className="text-sm font-semibold text-gray-300 mb-4">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-2">
                  <button className="p-3 rounded-lg bg-cyan-500/20 border border-cyan-500/30 hover:bg-cyan-500/30 transition-colors text-xs text-center">
                    <FileText className="w-4 h-4 mx-auto mb-1 text-cyan-400" />
                    Add Assessment
                  </button>
                  <button className="p-3 rounded-lg bg-purple-500/20 border border-purple-500/30 hover:bg-purple-500/30 transition-colors text-xs text-center">
                    <Briefcase className="w-4 h-4 mx-auto mb-1 text-purple-400" />
                    Add Company
                  </button>
                  <button className="p-3 rounded-lg bg-green-500/20 border border-green-500/30 hover:bg-green-500/30 transition-colors text-xs text-center">
                    <Video className="w-4 h-4 mx-auto mb-1 text-green-400" />
                    Upload Proof
                  </button>
                  <button className="p-3 rounded-lg bg-amber-500/20 border border-amber-500/30 hover:bg-amber-500/30 transition-colors text-xs text-center">
                    <Globe className="w-4 h-4 mx-auto mb-1 text-amber-400" />
                    Share Profile
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Companies */}
          <div className="mt-6">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-cyan-400" />
                  Companies & Technologies Created
                  <span className="text-sm text-gray-500">({companiesData.length} Innovations)</span>
                </h3>
                <button 
                  onClick={() => setShowCompaniesModal(true)}
                  className="text-sm text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                >
                  View All <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <div className="grid grid-cols-8 gap-3">
                {companiesData.map((company) => (
                  <motion.div
                    key={company.id}
                    className="p-3 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-cyan-500/50 transition-colors cursor-pointer text-center group"
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setShowCompaniesModal(true)}
                  >
                    <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center overflow-hidden">
                      {company.logo ? (
                        <img src={company.logo} alt={company.name} className="w-full h-full object-contain p-1" />
                      ) : (
                        <Hexagon className="w-5 h-5 text-cyan-400" />
                      )}
                    </div>
                    <p className="text-xs truncate">{company.name}</p>
                    <p className="text-[10px] text-gray-500">{company.founded}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Audio Modal */}
      <AnimatePresence>
        {showAudioModal && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowAudioModal(false)}
          >
            <motion.div
              className="bg-[#0d0d18] border border-cyan-500/30 rounded-2xl p-6 max-w-2xl w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Volume2 className="w-6 h-6 text-cyan-400" />
                  Listen to Rick Barretto SkillDNA Profile
                </h3>
                <button
                  onClick={() => setShowAudioModal(false)}
                  className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="aspect-video rounded-xl overflow-hidden bg-black">
                <iframe
                  src="https://player.vimeo.com/video/1153403859?h=56835768b9&autoplay=1&title=0&byline=0&portrait=0"
                  className="w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Companies Modal */}
      <AnimatePresence>
        {showCompaniesModal && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowCompaniesModal(false)}
          >
            <motion.div
              className="bg-[#0d0d18] border border-cyan-500/30 rounded-2xl p-6 max-w-4xl w-full max-h-[80vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Briefcase className="w-6 h-6 text-cyan-400" />
                  Companies & Technologies Created
                </h3>
                <button
                  onClick={() => setShowCompaniesModal(false)}
                  className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {companiesData.map((company) => (
                  <motion.div
                    key={company.id}
                    className="p-4 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-cyan-500/50 transition-all"
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0 overflow-hidden">
                        {company.logo ? (
                          <img src={company.logo} alt={company.name} className="w-full h-full object-contain p-2" />
                        ) : (
                          <Hexagon className="w-8 h-8 text-cyan-400" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-bold text-lg">{company.name}</h4>
                          <span className="text-xs text-cyan-400 bg-cyan-500/20 px-2 py-1 rounded">{company.founded}</span>
                        </div>
                        <p className="text-xs text-gray-500 mb-2">{company.category}</p>
                        <p className="text-sm text-gray-400 line-clamp-2">{company.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
