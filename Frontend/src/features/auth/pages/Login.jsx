import React, { useState } from 'react';
import { useAuth } from "../hook/useAuth";
import { useNavigate } from 'react-router';
import ContinueWithGoogle from '../components/ContinueWithGoogle';

const Login = () => {
  
  const auth = useAuth();

  const handleLogin = auth.handleLogin;
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { email: form.email, password: form.password };
    console.log('Login payload:', payload);
    try {
     
        await handleLogin(payload);
      
      navigate('/');
    } catch (err) {
      console.error('Login failed', err);
    }
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Inter:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />

      <div className="h-screen flex flex-col lg:flex-row selection:bg-[#C9A96E]/30 overflow-hidden" style={{ backgroundColor: '#fbf9f6', fontFamily: "'Inter', sans-serif" }}>
        {/* LEFT: Editorial Image Panel (same as Register) */}
        <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden" style={{ backgroundColor: '#f5f3f0' }}>
          <img
            src="/snitch_editorial_warm.png"
            alt="Snitch Fashion Editorial"
            className="absolute inset-0 w-full h-full object-cover object-top"
            style={{ filter: 'brightness(0.97)' }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(27,24,20,0.62) 0%, rgba(27,24,20,0.08) 45%, transparent 100%)' }} />
          <div className="absolute inset-0 p-14 flex flex-col justify-between z-10">
            <span className="text-sm font-medium tracking-[0.35em] uppercase" style={{ fontFamily: "'Cormorant Garamond', serif", color: '#C9A96E' }}>Snitch.</span>
            <div>
              <p className="text-5xl xl:text-6xl font-light leading-[1.08] text-white mb-5" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Define your<br />
                <em>aesthetic.</em>
              </p>
              <p className="text-sm font-light leading-relaxed max-w-xs" style={{ color: 'rgba(255,255,255,0.65)' }}>
                Join the exclusive movement of creators and brands redefining the modern fashion landscape.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT: Form Panel */}
        <div className="w-full lg:w-1/2 flex items-center justify-center h-screen px-6 sm:px-10 lg:px-16 py-8 overflow-hidden" style={{ backgroundColor: '#fbf9f6' }}>
          <div className="w-full max-w-sm">
            <div className="mb-6">
              <p className="text-[9px] uppercase tracking-[0.22em] mb-2 font-medium" style={{ color: '#C9A96E' }}>Welcome back</p>
              <h1 className="text-4xl lg:text-[2rem] font-light leading-[1.1]" style={{ fontFamily: "'Cormorant Garamond', serif", color: '#1b1c1a' }}>Sign in</h1>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-[10px] uppercase tracking-[0.18em] font-medium" style={{ color: '#7A6E63' }}>Email Address</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="hello@example.com" className="w-full bg-transparent outline-none py-2 text-sm transition-colors duration-300" style={{ color: '#1b1c1a', borderBottom: '1px solid #d0c5b5', fontFamily: "'Inter', sans-serif" }} />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[10px] uppercase tracking-[0.18em] font-medium" style={{ color: '#7A6E63' }}>Password</label>
              <input name="password" type="password" value={form.password} onChange={handleChange} required placeholder="••••••••" className="w-full bg-transparent outline-none py-2 text-sm transition-colors duration-300" style={{ color: '#1b1c1a', borderBottom: '1px solid #d0c5b5', fontFamily: "'Inter', sans-serif" }} />
            </div>

            <button type="submit" className="w-full py-3 text-[11px] uppercase tracking-[0.25em] font-medium transition-all duration-300 mt-1" style={{ backgroundColor: '#1b1c1a', color: '#fbf9f6', fontFamily: "'Inter', sans-serif" }} onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#C9A96E'; e.currentTarget.style.color = '#1b1c1a'; }} onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#1b1c1a'; e.currentTarget.style.color = '#fbf9f6'; }}>Sign In</button>

            <div className="flex items-center gap-4 my-1">
              <div className="flex-1 h-px" style={{ backgroundColor: '#e4e2df' }} />
              <span className="text-[9px] uppercase tracking-[0.15em]" style={{ color: '#B5ADA3' }}>or</span>
              <div className="flex-1 h-px" style={{ backgroundColor: '#e4e2df' }} />
            </div>
            
            {/* Google SSO */}
            <ContinueWithGoogle />

            <p className="text-center text-[15px]" style={{ color: '#B5ADA3' }}>Don't have an account? <a href="/register" className="transition-colors duration-200" style={{ color: '#7A6E63', textDecoration: 'underline', textUnderlineOffset: '3px' }} onMouseEnter={e => e.target.style.color = '#C9A96E'} onMouseLeave={e => e.target.style.color = '#7A6E63'}>Sign up</a></p>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;
