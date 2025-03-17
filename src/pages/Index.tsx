
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Card from '@/components/Card';
import AnimatedNumber from '@/components/AnimatedNumber';
import ArchitectureChart from '@/components/ArchitectureChart';
import { 
  Server, 
  Shield, 
  Database, 
  Users, 
  FileCheck, 
  Lock, 
  GitBranch, 
  BarChart, 
  Bell, 
  Code
} from 'lucide-react';

const Index = () => {
  useEffect(() => {
    // Add smooth scrolling behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          window.scrollTo({
            top: target.getBoundingClientRect().top + window.pageYOffset - 80,
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <Hero />
      
      {/* Overview Section */}
      <Section
        id="overview"
        title="Executive Summary"
        subtitle="The Education Dashboard Backend provides a robust API foundation for seamless management of student data and assessments."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          <Card
            title="Modern Architecture"
            description="Built with Node.js/Express API service, interfacing with MySQL and MongoDB databases."
            icon={Server}
            index={0}
          />
          <Card
            title="Secure Design"
            description="Implements industry-standard authentication protocols and comprehensive security measures."
            icon={Shield}
            index={1}
          />
          <Card
            title="Scalable Infrastructure"
            description="Designed for growth with CI/CD pipelines configured through Render.com."
            icon={GitBranch}
            index={2}
          />
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
          <div className="p-6 rounded-2xl glass-dark text-center">
            <AnimatedNumber
              end={100}
              suffix="%"
              className="text-3xl md:text-4xl font-bold text-primary"
            />
            <p className="mt-2 text-sm text-foreground/60">API Coverage</p>
          </div>
          <div className="p-6 rounded-2xl glass-dark text-center">
            <AnimatedNumber
              end={99.9}
              decimals={1}
              suffix="%"
              className="text-3xl md:text-4xl font-bold text-primary"
            />
            <p className="mt-2 text-sm text-foreground/60">Uptime</p>
          </div>
          <div className="p-6 rounded-2xl glass-dark text-center">
            <AnimatedNumber
              end={2}
              className="text-3xl md:text-4xl font-bold text-primary"
            />
            <p className="mt-2 text-sm text-foreground/60">Database Options</p>
          </div>
          <div className="p-6 rounded-2xl glass-dark text-center">
            <AnimatedNumber
              end={50}
              suffix="ms"
              className="text-3xl md:text-4xl font-bold text-primary"
            />
            <p className="mt-2 text-sm text-foreground/60">Avg Response Time</p>
          </div>
        </div>
      </Section>
      
      {/* Architecture Section */}
      <Section
        id="architecture"
        title="System Architecture"
        subtitle="A modern, decoupled architecture that separates frontend and backend concerns."
        className="bg-primary/5"
      >
        <div className="mb-12">
          <ArchitectureChart />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
            <h3 className="text-xl font-semibold mb-4">Component Structure</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 mr-3">
                  <span className="text-primary text-xs font-bold">1</span>
                </div>
                <div>
                  <span className="font-medium">Frontend Layer:</span>
                  <p className="text-foreground/60 mt-1">React application with TypeScript, Tailwind CSS, and shadcn/ui components.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 mr-3">
                  <span className="text-primary text-xs font-bold">2</span>
                </div>
                <div>
                  <span className="font-medium">Backend Layer:</span>
                  <p className="text-foreground/60 mt-1">Node.js/Express API server that processes business logic and manages data persistence.</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 animation-delay-200">
            <h3 className="text-xl font-semibold mb-4">Technology Stack Rationale</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 mr-3">
                  <span className="text-primary text-xs font-bold">✓</span>
                </div>
                <div>
                  <span className="font-medium">Node.js/Express:</span>
                  <p className="text-foreground/60 mt-1">Efficient runtime for handling multiple concurrent API requests with non-blocking I/O operations.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 mr-3">
                  <span className="text-primary text-xs font-bold">✓</span>
                </div>
                <div>
                  <span className="font-medium">MySQL Database:</span>
                  <p className="text-foreground/60 mt-1">Structured data storage with ACID compliance, ensuring data integrity for critical educational records.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Section>
      
      {/* Features Section */}
      <Section
        id="features"
        title="Core Functionality"
        subtitle="Comprehensive API endpoints supporting essential educational management capabilities."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <Card
            title="Authentication System"
            description="Secure access control through token-based authentication with support for role-based access."
            icon={Lock}
            index={0}
            className="h-full"
          />
          <Card
            title="Student Management"
            description="Comprehensive operations for creating, retrieving, and removing student records."
            icon={Users}
            index={1}
            className="h-full"
          />
          <Card
            title="Assessment Management"
            description="Functionality for creating, monitoring, and managing academic assessments and performance tracking."
            icon={FileCheck}
            index={2}
            className="h-full"
          />
        </div>
        
        <div className="mt-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
          <h3 className="text-2xl font-semibold mb-6 text-center">Database Architecture</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl glass-dark">
              <div className="flex items-center mb-4">
                <Database className="text-primary mr-3" size={24} />
                <h4 className="text-xl font-medium">Data Model Implementation</h4>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-white/50 rounded-lg">
                  <h5 className="font-medium mb-2">Students Table</h5>
                  <ul className="text-sm text-foreground/70 space-y-1">
                    <li><span className="font-mono text-primary">id:</span> Unique identifier (UUID)</li>
                    <li><span className="font-mono text-primary">name:</span> Student's full name</li>
                    <li><span className="font-mono text-primary">email:</span> Student's email address</li>
                  </ul>
                </div>
                <div className="p-4 bg-white/50 rounded-lg">
                  <h5 className="font-medium mb-2">Assessments Table</h5>
                  <ul className="text-sm text-foreground/70 space-y-1">
                    <li><span className="font-mono text-primary">id:</span> Unique identifier (UUID)</li>
                    <li><span className="font-mono text-primary">title:</span> Assessment title</li>
                    <li><span className="font-mono text-primary">description:</span> Detailed information</li>
                    <li><span className="font-mono text-primary">dueDate:</span> Submission deadline</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="p-6 rounded-2xl glass-dark">
              <div className="flex items-center mb-4">
                <Code className="text-primary mr-3" size={24} />
                <h4 className="text-xl font-medium">API Endpoints</h4>
              </div>
              <div className="space-y-3">
                <div className="flex items-center p-2 rounded bg-white/50">
                  <span className="px-2 py-1 rounded bg-green-100 text-green-800 text-xs font-medium mr-3">POST</span>
                  <span className="font-mono text-sm">/api/auth/login</span>
                </div>
                <div className="flex items-center p-2 rounded bg-white/50">
                  <span className="px-2 py-1 rounded bg-green-100 text-green-800 text-xs font-medium mr-3">POST</span>
                  <span className="font-mono text-sm">/api/auth/logout</span>
                </div>
                <div className="flex items-center p-2 rounded bg-white/50">
                  <span className="px-2 py-1 rounded bg-blue-100 text-blue-800 text-xs font-medium mr-3">GET</span>
                  <span className="font-mono text-sm">/api/students</span>
                </div>
                <div className="flex items-center p-2 rounded bg-white/50">
                  <span className="px-2 py-1 rounded bg-green-100 text-green-800 text-xs font-medium mr-3">POST</span>
                  <span className="font-mono text-sm">/api/students</span>
                </div>
                <div className="flex items-center p-2 rounded bg-white/50">
                  <span className="px-2 py-1 rounded bg-red-100 text-red-800 text-xs font-medium mr-3">DELETE</span>
                  <span className="font-mono text-sm">/api/students/:id</span>
                </div>
                <div className="flex items-center p-2 rounded bg-white/50">
                  <span className="px-2 py-1 rounded bg-blue-100 text-blue-800 text-xs font-medium mr-3">GET</span>
                  <span className="font-mono text-sm">/api/assessments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Security Section */}
      <Section
        id="security"
        title="Security Implementation"
        subtitle="Comprehensive security measures across multiple layers to protect sensitive educational data."
        className="bg-primary/5"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
            <h3 className="text-xl font-semibold mb-4">Authentication & Authorization</h3>
            <ul className="space-y-4">
              <li className="flex">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mr-4">
                  <Shield className="text-primary" size={20} />
                </div>
                <div>
                  <span className="font-medium">Token-based Authentication</span>
                  <p className="text-foreground/60 text-sm mt-1">Validates user credentials and issues time-limited JWTs for authenticated sessions.</p>
                </div>
              </li>
              <li className="flex">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mr-4">
                  <Users className="text-primary" size={20} />
                </div>
                <div>
                  <span className="font-medium">Role-based Access Control</span>
                  <p className="text-foreground/60 text-sm mt-1">Limits operations based on user permissions to ensure proper data access.</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 animation-delay-200">
            <h3 className="text-xl font-semibold mb-4">Data Protection Measures</h3>
            <ul className="space-y-4">
              <li className="flex">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mr-4">
                  <Lock className="text-primary" size={20} />
                </div>
                <div>
                  <span className="font-medium">Secure Data Transmission</span>
                  <p className="text-foreground/60 text-sm mt-1">HTTPS implementation for secure transmission of credentials and sensitive data.</p>
                </div>
              </li>
              <li className="flex">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mr-4">
                  <Database className="text-primary" size={20} />
                </div>
                <div>
                  <span className="font-medium">Environment Variable Security</span>
                  <p className="text-foreground/60 text-sm mt-1">Database credentials and sensitive configuration stored in environment variables.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="p-6 rounded-2xl glass-dark animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
          <h3 className="text-xl font-semibold mb-4">Security Best Practices</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4 bg-white/50 rounded-lg">
              <h4 className="font-medium mb-2">Input Validation</h4>
              <p className="text-sm text-foreground/70">All user-submitted data undergoes validation to prevent injection attacks.</p>
            </div>
            <div className="p-4 bg-white/50 rounded-lg">
              <h4 className="font-medium mb-2">CORS Configuration</h4>
              <p className="text-sm text-foreground/70">API access limited to approved frontend origins for resource protection.</p>
            </div>
            <div className="p-4 bg-white/50 rounded-lg">
              <h4 className="font-medium mb-2">Error Handling</h4>
              <p className="text-sm text-foreground/70">Sanitized error messages to avoid exposing sensitive system information.</p>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Operations Section */}
      <Section
        id="operations"
        title="Deployment & Operations"
        subtitle="Modern deployment practices to ensure reliable operation and simplified maintenance."
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card
                title="CI/CD Pipeline"
                description="Automated deployment workflow through Render.com with testing, building, and deployment phases."
                icon={GitBranch}
                index={0}
                className="h-full"
              />
              <Card
                title="Database Migration"
                description="Structured approach to database schema evolution with version control and migration scripts."
                icon={Database}
                index={1}
                className="h-full"
              />
              <Card
                title="Monitoring System"
                description="Comprehensive monitoring with structured logging, performance metrics, and error tracking."
                icon={BarChart}
                index={2}
                className="h-full"
              />
              <Card
                title="Alerting System"
                description="Proactive notification system for error rates, availability, and performance degradation."
                icon={Bell}
                index={3}
                className="h-full"
              />
            </div>
          </div>
          
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 lg:row-span-2">
            <div className="p-6 rounded-2xl glass-dark h-full">
              <h3 className="text-xl font-semibold mb-6">Operational Workflow</h3>
              
              <div className="relative pl-8 pb-8 border-l-2 border-primary/30">
                <div className="absolute left-0 translate-x-[-50%] w-4 h-4 rounded-full bg-primary"></div>
                <div className="mb-1 font-medium">Code Integration</div>
                <p className="text-sm text-foreground/60 mb-6">Automated build triggered when changes are committed to main branch.</p>
                
                <div className="absolute left-0 top-[88px] translate-x-[-50%] w-4 h-4 rounded-full bg-primary"></div>
                <div className="mb-1 font-medium">Testing Phase</div>
                <p className="text-sm text-foreground/60 mb-6">Execution of the test suite to validate functionality.</p>
                
                <div className="absolute left-0 top-[176px] translate-x-[-50%] w-4 h-4 rounded-full bg-primary"></div>
                <div className="mb-1 font-medium">Build Process</div>
                <p className="text-sm text-foreground/60 mb-6">Application building according to predetermined configurations.</p>
                
                <div className="absolute left-0 top-[264px] translate-x-[-50%] w-4 h-4 rounded-full bg-primary"></div>
                <div className="mb-1 font-medium">Deployment</div>
                <p className="text-sm text-foreground/60 mb-6">Automatic deployment to the production environment.</p>
                
                <div className="absolute left-0 top-[352px] translate-x-[-50%] w-4 h-4 rounded-full bg-primary"></div>
                <div className="mb-1 font-medium">Verification</div>
                <p className="text-sm text-foreground/60">Post-deployment verification to ensure system stability.</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
            <div className="p-6 rounded-2xl glass-dark">
              <h3 className="text-xl font-semibold mb-4">Testing Framework</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 bg-white/50 rounded-lg text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center bg-primary/10">
                    <Code className="text-primary" size={24} />
                  </div>
                  <h4 className="font-medium">Unit Tests</h4>
                  <p className="text-sm text-foreground/70 mt-2">Individual functions and components testing.</p>
                </div>
                <div className="p-4 bg-white/50 rounded-lg text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center bg-primary/10">
                    <Server className="text-primary" size={24} />
                  </div>
                  <h4 className="font-medium">Integration Tests</h4>
                  <p className="text-sm text-foreground/70 mt-2">API endpoint verification with realistic data.</p>
                </div>
                <div className="p-4 bg-white/50 rounded-lg text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center bg-primary/10">
                    <Database className="text-primary" size={24} />
                  </div>
                  <h4 className="font-medium">Database Tests</h4>
                  <p className="text-sm text-foreground/70 mt-2">Connection and operation verification.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Conclusion Section */}
      <Section
        id="conclusion"
        title="Conclusion"
        subtitle="A robust foundation for educational data management with comprehensive API capabilities."
        className="bg-primary/5"
      >
        <div className="max-w-3xl mx-auto animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
          <div className="p-6 rounded-2xl glass-dark">
            <h3 className="text-xl font-semibold mb-4">Key Strengths</h3>
            <ul className="space-y-4">
              <li className="flex">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 mr-3">
                  <span className="text-primary text-xs font-bold">✓</span>
                </div>
                <div>
                  <span className="font-medium">Flexible database support</span>
                  <p className="text-foreground/60 text-sm">With consistent data models across MySQL and MongoDB</p>
                </div>
              </li>
              <li className="flex">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 mr-3">
                  <span className="text-primary text-xs font-bold">✓</span>
                </div>
                <div>
                  <span className="font-medium">Comprehensive API endpoints</span>
                  <p className="text-foreground/60 text-sm">For core educational management functions</p>
                </div>
              </li>
              <li className="flex">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 mr-3">
                  <span className="text-primary text-xs font-bold">✓</span>
                </div>
                <div>
                  <span className="font-medium">Robust security measures</span>
                  <p className="text-foreground/60 text-sm">Protecting sensitive student data</p>
                </div>
              </li>
              <li className="flex">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 mr-3">
                  <span className="text-primary text-xs font-bold">✓</span>
                </div>
                <div>
                  <span className="font-medium">Modern CI/CD pipeline</span>
                  <p className="text-foreground/60 text-sm">Enabling rapid, reliable deployments</p>
                </div>
              </li>
              <li className="flex">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 mr-3">
                  <span className="text-primary text-xs font-bold">✓</span>
                </div>
                <div>
                  <span className="font-medium">Extensive monitoring</span>
                  <p className="text-foreground/60 text-sm">With troubleshooting capabilities</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg text-foreground/80">The Education Dashboard Backend provides a solid technical foundation to effectively support educational institutions in student and assessment management.</p>
            <div className="mt-8">
              <a
                href="#overview"
                className="px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors inline-block"
              >
                Back to Top
              </a>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Footer */}
      <footer className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-foreground/60">Education Dashboard Documentation</p>
          <p className="text-sm text-foreground/40 mt-2">© {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
