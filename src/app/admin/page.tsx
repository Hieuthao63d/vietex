"use client";

import { useEffect, useState } from "react";
import { API_BASE_URL } from "@/lib/api";
import { Users, DollarSign, Package, FileText, Bell, Settings, Mail } from "lucide-react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer } from "recharts";
import WorldMap from "@/components/WorldMap";

export default function AdminDashboard() {
  const [productsCount, setProductsCount] = useState(0);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/products`)
      .then(res => res.json())
      .then(data => {
        setProductsCount(data.length);
      })
      .catch(console.error);
  }, []);

  // Mock data for charts
  const inquiryStatusData = [
    { name: "Pending", value: 145, color: "#F59E0B" },
    { name: "In Progress", value: 85, color: "#3B82F6" },
    { name: "Resolved", value: 230, color: "#10B981" },
  ];

  const inquiryMonthlyData = [
    { month: "Jan", value: 45 },
    { month: "Feb", value: 52 },
    { month: "Mar", value: 38 },
    { month: "Apr", value: 65 },
    { month: "May", value: 48 },
    { month: "Jun", value: 70 },
  ];

  const locationData = [
    { country: "Japan", percentage: 30, color: "#EF4444" },
    { country: "S. Korea", percentage: 25, color: "#3B82F6" },
    { country: "Russia", percentage: 15, color: "#06B6D4" },
    { country: "Malaysia", percentage: 12, color: "#10B981" },
    { country: "Thailand", percentage: 10, color: "#F59E0B" },
    { country: "Indonesia", percentage: 8, color: "#8B5CF6" },
  ];

  return (
    <div className="flex-1 min-h-full">
      {/* Main Content */}
      <main className="p-8 max-w-[1400px] mx-auto space-y-8">
        
        {/* Welcome Section */}
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Good Morning Admin!</h1>
            <p className="text-gray-500 text-sm mt-1">Dashboard</p>
          </div>
          <div className="relative group z-20">
            <div className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm font-medium text-gray-600 shadow-sm cursor-pointer hover:bg-gray-50 flex items-center gap-2">
              Aug 23 <span className="text-[10px]">▼</span>
            </div>
            <div className="absolute top-full right-0 mt-2 w-40 bg-white rounded-xl shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <div className="py-2">
                <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm font-medium text-gray-800">Aug 23 (Today)</div>
                <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm font-medium text-gray-600">Last 7 days</div>
                <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm font-medium text-gray-600">Last 30 days</div>
                <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm font-medium text-gray-600">This Year</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard title="Website Visitors" value="2,456" change="+18.33%" icon={<Users className="text-gray-400" size={24} />} />
          <StatCard title="Total Inquiries" value="460" icon={<Mail className="text-gray-400" size={24} />} />
          <StatCard title="Total Products" value={productsCount.toString()} change="-2.5%" icon={<Package className="text-gray-400" size={24} />} negative />
          <StatCard title="Total Posts" value="864" icon={<FileText className="text-gray-400" size={24} />} />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Pie Chart */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
            <h3 className="font-semibold text-gray-800 mb-6">Inquiries by Status</h3>
            <div className="flex-1 flex flex-col justify-between">
              <div className="h-48 relative">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={inquiryStatusData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {inquiryStatusData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <RechartsTooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-gray-400 text-sm font-medium">Inquiries</span>
                </div>
              </div>
              <div className="space-y-3 mt-6">
                {inquiryStatusData.map(item => (
                  <div key={item.name} className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }}></span>
                      {item.name}
                    </div>
                    <span className="font-bold text-gray-800">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bar Chart */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
            <h3 className="font-semibold text-gray-800 mb-6">Inquiries by Month</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={inquiryMonthlyData} barSize={12}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12 }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12 }} dx={-10} />
                  <RechartsTooltip cursor={{ fill: '#F3F4F6' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                  <Bar dataKey="value" fill="#4F46E5" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-center text-gray-400 text-sm italic mt-4">Quote requests this year</p>
          </div>

          {/* Map/Location Card */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
            <h3 className="font-semibold text-gray-800 mb-6">Inquiries by Location</h3>
            <div className="flex-1 flex flex-col justify-between">
              
              <div className="relative w-full h-48 bg-blue-50/30 rounded-xl mb-6 overflow-hidden flex items-center justify-center border border-gray-100">
                <WorldMap />
              </div>

              <div className="space-y-4">
                {locationData.map(loc => (
                  <div key={loc.country} className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 w-12">{loc.country}</span>
                    <div className="flex-1 mx-4 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${loc.percentage}%`, backgroundColor: loc.color }}></div>
                    </div>
                    <span className="font-bold text-gray-800">{loc.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Helper Component for Stats
function StatCard({ title, value, change, icon, prefix, negative }: any) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-3xl font-bold text-gray-900">{prefix}{value}</h2>
          {change && (
            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${negative ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'}`}>
              {change}
            </span>
          )}
        </div>
        <p className="text-sm text-gray-500">{title}</p>
      </div>
      <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100">
        {icon}
      </div>
    </div>
  );
}
