import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { BookOpen, PenTool, Layout, ListTodo, FileText, BarChart, Settings, HelpCircle } from 'lucide-react';
import React from 'react';

// Navigation Link Component with Active State
const NavLink = ({ to, icon: Icon, children }: { to: string, icon: any, children: React.ReactNode }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={`flex items-center gap-3 p-2 rounded transition-colors ${
        isActive 
          ? 'bg-blue-600 text-white' 
          : 'text-slate-300 hover:bg-slate-800 hover:text-white'
      }`}
    >
      <Icon size={20} /> 
      <span>{children}</span>
    </Link>
  );
};

// Placeholder components
const Dashboard = () => (
  <div className="p-8">
    <h1 className="text-3xl font-bold mb-6 text-slate-800">Dashboard</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
        <h3 className="text-sm font-medium text-slate-500 uppercase">Total Words</h3>
        <p className="text-3xl font-bold text-slate-900 mt-2">12,450</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
        <h3 className="text-sm font-medium text-slate-500 uppercase">Chapters</h3>
        <p className="text-3xl font-bold text-slate-900 mt-2">5/12</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
        <h3 className="text-sm font-medium text-slate-500 uppercase">Tasks</h3>
        <p className="text-3xl font-bold text-slate-900 mt-2">8 Pending</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
        <h3 className="text-sm font-medium text-slate-500 uppercase">Project Health</h3>
        <p className="text-3xl font-bold text-emerald-600 mt-2">98%</p>
      </div>
    </div>
  </div>
);

const Constitution = () => (
  <div className="p-8 max-w-4xl">
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold text-slate-800">Constitution</h1>
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Save Changes</button>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 space-y-6">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Core Values</label>
        <textarea className="w-full h-32 p-3 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="What does this story convey?"></textarea>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Quality Standards</label>
        <textarea className="w-full h-32 p-3 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Non-negotiable standards..."></textarea>
      </div>
    </div>
  </div>
);

const Specify = () => (
  <div className="p-8 max-w-4xl">
    <h1 className="text-3xl font-bold text-slate-800 mb-6">Story Specification</h1>
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 space-y-6">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Story Concept</label>
        <input type="text" className="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="e.g. A useless boy gets a sign-in system..." />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Target Audience</label>
        <input type="text" className="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Who is this for?" />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Core Constraints</label>
        <textarea className="w-full h-32 p-3 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Define boundaries..."></textarea>
      </div>
    </div>
  </div>
);

const Clarify = () => (
  <div className="p-8 max-w-4xl">
    <h1 className="text-3xl font-bold text-slate-800 mb-6">Clarify Decisions</h1>
    <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg mb-6 text-amber-800">
      <p>⚠️ AI detected 3 ambiguous points in your specification.</p>
    </div>
    <div className="space-y-4">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
        <h3 className="font-semibold text-lg mb-3">Is the protagonist's system visible to others?</h3>
        <div className="space-y-2">
          <label className="flex items-center gap-2 p-3 border rounded hover:bg-slate-50 cursor-pointer">
            <input type="radio" name="q1" />
            <span>Yes, but only high-level mages can see it.</span>
          </label>
          <label className="flex items-center gap-2 p-3 border rounded hover:bg-slate-50 cursor-pointer">
            <input type="radio" name="q1" />
            <span>No, it's completely internal.</span>
          </label>
        </div>
      </div>
    </div>
  </div>
);

const Plan = () => (
  <div className="p-8 max-w-6xl">
    <h1 className="text-3xl font-bold text-slate-800 mb-6">Writing Plan</h1>
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-1 bg-white p-6 rounded-lg shadow-sm border border-slate-200">
        <h3 className="font-bold mb-4">Structure</h3>
        <div className="space-y-2">
          <div className="p-2 bg-blue-50 text-blue-700 rounded text-sm">Act I: The Awakening</div>
          <div className="p-2 bg-slate-50 text-slate-700 rounded text-sm">Act II: The Journey</div>
          <div className="p-2 bg-slate-50 text-slate-700 rounded text-sm">Act III: The Climax</div>
        </div>
      </div>
      <div className="col-span-2 bg-white p-6 rounded-lg shadow-sm border border-slate-200">
        <h3 className="font-bold mb-4">Chapter Outline</h3>
        <div className="space-y-4">
          <div className="border-b pb-4">
            <h4 className="font-medium">Chapter 1: The Engagement Break-off</h4>
            <p className="text-slate-600 text-sm mt-1">Introduce the protagonist's low status and the humiliation event.</p>
          </div>
          <div className="border-b pb-4">
            <h4 className="font-medium">Chapter 2: The System Awakens</h4>
            <p className="text-slate-600 text-sm mt-1">Protagonist discovers the sign-in system at the ancestral hall.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Tasks = () => (
  <div className="p-8 max-w-4xl">
    <h1 className="text-3xl font-bold text-slate-800 mb-6">Tasks & Todo</h1>
    <div className="space-y-3">
      <div className="flex items-center gap-3 p-4 bg-white border border-l-4 border-l-red-500 rounded shadow-sm">
        <input type="checkbox" className="w-5 h-5 text-blue-600 rounded" />
        <div className="flex-1">
          <h4 className="font-medium">Complete Chapter 3 Draft</h4>
          <span className="text-xs text-red-500 font-bold">P0 High Priority</span>
        </div>
      </div>
      <div className="flex items-center gap-3 p-4 bg-white border border-l-4 border-l-yellow-500 rounded shadow-sm">
        <input type="checkbox" className="w-5 h-5 text-blue-600 rounded" />
        <div className="flex-1">
          <h4 className="font-medium">Refine Magic System Rules</h4>
          <span className="text-xs text-yellow-600 font-bold">P1 Normal Priority</span>
        </div>
      </div>
    </div>
  </div>
);

const Write = () => (
  <div className="flex h-full">
    <div className="w-64 bg-white border-r border-slate-200 p-4">
      <h3 className="font-bold text-slate-700 mb-4">Chapters</h3>
      <div className="space-y-1">
        <div className="p-2 bg-blue-50 text-blue-700 rounded cursor-pointer">Chapter 1</div>
        <div className="p-2 hover:bg-slate-50 rounded cursor-pointer">Chapter 2</div>
        <div className="p-2 hover:bg-slate-50 rounded cursor-pointer">Chapter 3</div>
      </div>
    </div>
    <div className="flex-1 flex flex-col">
      <div className="border-b border-slate-200 p-4 flex justify-between items-center bg-white">
        <h2 className="font-bold text-lg">Chapter 1: The Engagement Break-off</h2>
        <div className="flex gap-2">
          <button className="px-3 py-1 text-sm border rounded hover:bg-slate-50">Generate Next</button>
          <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">Save</button>
        </div>
      </div>
      <div className="flex-1 p-8 overflow-auto bg-slate-50">
        <div className="max-w-3xl mx-auto bg-white min-h-[800px] p-12 shadow-sm">
          <p className="text-lg leading-relaxed text-slate-800">
            The wind howled through the broken windows of the Xiao family's ancestral hall. Xiao Yan knelt on the cold stone floor, his fists clenched so tight his nails dug into his palms...
          </p>
        </div>
      </div>
    </div>
  </div>
);

const Analyze = () => (
  <div className="p-8 max-w-4xl">
    <h1 className="text-3xl font-bold text-slate-800 mb-6">Analysis Report</h1>
    <div className="grid grid-cols-2 gap-6 mb-8">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
        <h3 className="font-bold mb-4">Consistency Check</h3>
        <div className="flex items-center gap-4 text-emerald-600">
          <div className="text-2xl font-bold">100%</div>
          <span>No contradictions found</span>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
        <h3 className="font-bold mb-4">Pacing Score</h3>
        <div className="flex items-center gap-4 text-blue-600">
          <div className="text-2xl font-bold">8.5/10</div>
          <span>Good engagement flow</span>
        </div>
      </div>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
      <h3 className="font-bold mb-4">Detailed Insights</h3>
      <ul className="space-y-3 text-slate-600">
        <li className="flex items-start gap-2">
          <span className="text-green-500">✓</span>
          Character motivation aligns with Constitution principles.
        </li>
        <li className="flex items-start gap-2">
          <span className="text-green-500">✓</span>
          World-building rules (Magic System) respected in Chapter 2.
        </li>
        <li className="flex items-start gap-2">
          <span className="text-yellow-500">!</span>
          Chapter 3 pacing might be too slow compared to Chapter 1.
        </li>
      </ul>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-slate-50 font-sans text-slate-900">
        {/* Sidebar */}
        <div className="w-64 bg-slate-900 text-slate-300 flex flex-col flex-shrink-0">
          <div className="p-4 h-16 border-b border-slate-800 flex items-center gap-3">
            <div className="bg-blue-600 p-1.5 rounded">
              <BookOpen size={20} className="text-white" />
            </div>
            <span className="font-bold text-white text-lg">Novel Writer</span>
          </div>
          
          <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
            <NavLink to="/" icon={Layout}>Dashboard</NavLink>
            
            <div className="pt-6 pb-2 px-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Foundation
            </div>
            <NavLink to="/constitution" icon={Settings}>Constitution</NavLink>
            <NavLink to="/specify" icon={FileText}>Specify</NavLink>
            <NavLink to="/clarify" icon={HelpCircle}>Clarify</NavLink>

            <div className="pt-6 pb-2 px-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Planning
            </div>
            <NavLink to="/plan" icon={Layout}>Plan</NavLink>
            <NavLink to="/tasks" icon={ListTodo}>Tasks</NavLink>

            <div className="pt-6 pb-2 px-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Creation
            </div>
            <NavLink to="/write" icon={PenTool}>Write</NavLink>
            <NavLink to="/analyze" icon={BarChart}>Analyze</NavLink>
          </div>
          
          <div className="p-4 border-t border-slate-800 text-xs text-slate-500">
            v0.10.0 SDD Edition
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/constitution" element={<Constitution />} />
            <Route path="/specify" element={<Specify />} />
            <Route path="/clarify" element={<Clarify />} />
            <Route path="/plan" element={<Plan />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/write" element={<Write />} />
            <Route path="/analyze" element={<Analyze />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
