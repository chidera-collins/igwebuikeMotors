import React from 'react';

function HomeComponent9() {
    const partners =[
       {
         id:1,
            img:'https://html.themewant.com/autovault/assets/images/brand/01.svg'
        },
        {
            id:2,
            img:'https://html.themewant.com/autovault/assets/images/brand/02.svg'  
        },
        {
            id:3,
            img:'https://html.themewant.com/autovault/assets/images/brand/03.svg'
        },
        {
            id:4,
            img:'https://html.themewant.com/autovault/assets/images/brand/04.svg'
        },
        {
            id:5,
            img:'https://html.themewant.com/autovault/assets/images/brand/05.svg'
        },
        {
            id:6,
            img:'https://html.themewant.com/autovault/assets/images/brand/06.svg'
        },
        {
            id:7,
            img:'https://html.themewant.com/autovault/assets/images/brand/07.svg'
        }
    ]
  return (
    <div>
        <section className='min-h-[100px] bg-mybg w-full grid grid-cols-1 lg:grid-cols-7 lg:gap-4 p-14 gap-5 md:grid-cols-3 md:place-items-center'>
            {partners.map((value, id)=>(
                <div key={id} className='min-h-[100px] bg- flex items-center justify-center border-[0.1px] border-[#ffffff18] p-4'>
                        <img src={value.img} alt={value.img}  width='50%' height='50%'/>
                </div>
            ))}

        </section>
    </div>
  )
}

export default HomeComponent9