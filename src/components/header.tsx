"use client"
import Link from "next/link";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

import { Menu } from "lucide-react";

import { useEffect, useRef } from 'react';
// first we have to run this command npm install typed.js
import Typed from 'typed.js';

export default function Header() {
  const autoTypeRef = useRef(null);
  // cards
  
      useEffect(() => {
        if (autoTypeRef.current) {
          const typed = new Typed(autoTypeRef.current, {
            strings: ["Web Design", "Branding", "Ecommerce"],
            typeSpeed: 100,
            backSpeed: 100,
            loop: true
          });
    
          return () => {
            typed.destroy();
          };
        }
      }, []);




    return (
        <>
        <div className="bubble-container "
        style={{height:'100vh',width:'100%',position:'relative'
        ,zIndex:1,background:'linear-gradient(to bottom, #26085d, #031b68)',overflow:'hidden',display:'flex',justifyContent:'centet',gap:'500px'}}>
            {/* <div className="bubble bubble1"></div>
            <div className="bubble bubble2"></div>
            <div className="bubble bubble3"></div>
            <div className="bubble bubble4"></div>
            <div className="bubble bubble5"></div>
            <div className="bubble bubble6"></div>
            <div className="header max-w-screen-2xl
                           relative z-10 flex
                        justify-between "> */}
         <h1 className="name-effect  
        "
           style={{marginTop:'10px',color:'white',fontWeight:'bold',fontSize:'40px',marginLeft:'80px'}} >SABIHA<span className="text-transparent"
                style={{
                    WebkitTextStroke: '2px #ffffff',
                    fontFamily:'franklin-gothic-urw, sans-serif'
                
                }}>SULTANA</span></h1>
                <ul 
                style={{display:'flex',justifyContent:'justify-between',gap:'40px',color:'white',fontWeight:'bold',fontSize:'20px',marginTop:'20px'}} >
                    <li ><Link href="/">Home</Link></li>
                <li> <Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li> 
                <li><Link href="projects">Projects</Link></li>
            </ul>
                <Sheet>
  <SheetTrigger style={{display:'none'}}><Menu className="mt-5 text-white xxs:w-8 xxs:h-8 xs:w-10 xs:h-10 md:w-10 md:h-10" /></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle><ul  style={{fontSize:'20px',marginTop:'50px'}}>
                  <li ><Link href="/"  >Home</Link></li>
              <li> <Link href="/about" >About</Link></li>
              <li><Link href="/contact">Contact</Link></li> 
              <li><Link href="projects" >Projects</Link></li>
           </ul></SheetTitle>
      <SheetDescription>
      Feel free to explore my portfolio, and let's discuss how I can help bring your digital vision to life.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

           </div>
           <section 
            style={{marginLeft:'100px',position:'absolute',zIndex:'1',top:'200px',width:'500px',}}>

<h1 
 style={{fontFamily:'franklin-gothic-urw, sans-serif',color:'white',fontWeight:'bold',fontSize:'60px'}}>
     I Provide Flexible  <h1 ref={autoTypeRef} className="auto-type inline"> </h1> <span className="auto-type"></span> Solutions
 <p 
 style={{fontFamily:'franklin-gothic-urw, sans-serif',fontSize:'20px',color:'white',marginTop:'20px',fontWeight:'light'}}>
  Big ideas, tailored solutions. Flexible approaches to meet your unique needs.</p></h1>
 
 

    
</section>
<button 
  style={{height:'55px',width:'220px',fontSize:'18px',color:'white',fontFamily:'franklin-gothic-urw, sans-serif',
  background:'linear-gradient(180deg, #fc4f6c 0%, #e60b87 100%)',borderRadius:'40px',position:'absolute',zIndex:'1',left:'200px', top:'600px'}}>Lets Get Started </button>



{/* cards */}
<div className="carousel" style={{position:'absolute',zIndex:1,top:'330px',left:'600px'}}>
        <div className="cards-container">
            <div className="card ">
                <div className='cimg1 cimg'></div>
                <div className='ctext1 webd'>Website Development</div>
            </div>

            <div className="card">
                 <div className='cimg2 cimg'></div>
                 <div className='ctext1 ecom'>Ecommerce Development</div>
            </div>

            <div className="card"> 
                <div className='cimg3 cimg'></div>
                <div className='ctext1'>Digital Marketing</div>
            </div>
            
            <div className="card"> 
                <div className='cimg4 cimg'></div>
                <div className='ctext1'>Branding Solution</div>
            </div>
             




            <div className="card">
                <div className='cimg1 cimg'></div>
                <div className='ctext1'>Website Development</div>
            </div>

            <div className="card">
                 <div className='cimg2 cimg'></div>
                 <div className='ctext1'>Ecommerce Development</div>
            </div>

            <div className="card"> 
                <div className='cimg3 cimg'></div>
                <div className='ctext1'>Digital Marketing</div>
            </div>
            
            <div className="card"> 
                <div className='cimg4 cimg'></div>
                <div className='ctext1'>Branding Solution</div>
            </div>
            <div className="card">
                <div className='cimg1 cimg'></div>
                <div className='ctext1'>Website Development</div>
            </div>

            <div className="card">
                 <div className='cimg2 cimg'></div>
                 <div className='ctext1'>Ecommerce Development</div>
            </div>

            <div className="card"> 
                <div className='cimg3 cimg'></div>
                <div className='ctext1'>Digital Marketing</div>
            </div>
            
            <div className="card"> 
                <div className='cimg4 cimg'></div>
                <div className='ctext1'>Branding Solution</div>
            </div>
            <div className="card">
                <div className='cimg1 cimg'></div>
                <div className='ctext1'>Website Development</div>
            </div>

            <div className="card">
                 <div className='cimg2 cimg'></div>
                 <div className='ctext1'>Ecommerce Development</div>
            </div>

            <div className="card"> 
                <div className='cimg3 cimg'></div>
                <div className='ctext1'>Digital Marketing</div>
            </div>
            
            <div className="card"> 
                <div className='cimg4 cimg'></div>
                <div className='ctext1'>Branding Solution</div>
            </div>
            <div className="card">
                <div className='cimg1 cimg'></div>
                <div className='ctext1'>Website Development</div>
            </div>

            <div className="card">
                 <div className='cimg2 cimg'></div>
                 <div className='ctext1'>Ecommerce Development</div>
            </div>

            <div className="card"> 
                <div className='cimg3 cimg'></div>
                <div className='ctext1'>Digital Marketing</div>
            </div>
            
            <div className="card"> 
                <div className='cimg4 cimg'></div>
                <div className='ctext1'>Branding Solution</div>
            </div>
            <div className="card">
                <div className='cimg1 cimg'></div>
                <div className='ctext1'>Website Development</div>
            </div>

            <div className="card">
                 <div className='cimg2 cimg'></div>
                 <div className='ctext1'>Ecommerce Development</div>
            </div>

            <div className="card"> 
                <div className='cimg3 cimg'></div>
                <div className='ctext1'>Digital Marketing</div>
            </div>
            
            <div className="card"> 
                <div className='cimg4 cimg'></div>
                <div className='ctext1'>Branding Solution</div>
            </div>
            <div className="card">
                <div className='cimg1 cimg'></div>
                <div className='ctext1'>Website Development</div>
            </div>

            <div className="card">
                 <div className='cimg2 cimg'></div>
                 <div className='ctext1'>Ecommerce Development</div>
            </div>

            <div className="card"> 
                <div className='cimg3 cimg'></div>
                <div className='ctext1'>Digital Marketing</div>
            </div>
            
            <div className="card"> 
                <div className='cimg4 cimg'></div>
                <div className='ctext1'>Branding Solution</div>
            </div>
            <div className="card">
                <div className='cimg1 cimg'></div>
                <div className='ctext1'>Website Development</div>
            </div>

            <div className="card">
                 <div className='cimg2 cimg'></div>
                 <div className='ctext1'>Ecommerce Development</div>
            </div>

            <div className="card"> 
                <div className='cimg3 cimg'></div>
                <div className='ctext1'>Digital Marketing</div>
            </div>
            
            <div className="card"> 
                <div className='cimg4 cimg'></div>
                <div className='ctext1'>Branding Solution</div>
            </div>
            <div className="card">
                <div className='cimg1 cimg'></div>
                <div className='ctext1'>Website Development</div>
            </div>

            <div className="card">
                 <div className='cimg2 cimg'></div>
                 <div className='ctext1'>Ecommerce Development</div>
            </div>

            <div className="card"> 
                <div className='cimg3 cimg'></div>
                <div className='ctext1'>Digital Marketing</div>
            </div>
            
            <div className="card"> 
                <div className='cimg4 cimg'></div>
                <div className='ctext1'>Branding Solution</div>
            </div>
            <div className="card">
                <div className='cimg1 cimg'></div>
                <div className='ctext1'>Website Development</div>
            </div>

            <div className="card">
                 <div className='cimg2 cimg'></div>
                 <div className='ctext1'>Ecommerce Development</div>
            </div>

            <div className="card"> 
                <div className='cimg3 cimg'></div>
                <div className='ctext1'>Digital Marketing</div>
            </div>
            
            <div className="card"> 
                <div className='cimg4 cimg'></div>
                <div className='ctext1'>Branding Solution</div>
            </div>
        </div>
    </div>
    




    <div className="circle absolute top-[100px] left-[500px] h-[600px] w-[600px] border-l-2 border-[#5306ec] rounded-full "></div>
    <div className="circle1 absolute top-[100px] left-[900px] h-[600px] w-[600px] border-l-2 border-[#5306ec] rounded-full"></div>



        {/* </div> */}
        </>
    )}



 









   