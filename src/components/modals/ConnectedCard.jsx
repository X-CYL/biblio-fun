import React from 'react'

export default function ConnectedCard() {
  return (
    <>
        <div className="grid h-screen place-items-center">
            <div className='bg-bg-card w-96 md:w-[600px] border-8 border-border-input-color rounded-xl h-[500px]'>
            <h2 className='text-5xl text-center'>Se connecter</h2>
            <body>
                <label htmlFor="email"> Votre e-mail</label>
                    <input type="email" name="email" />
                <label htmlFor="password"> Mot de passe</label>
                    <input type="text" name="password" />
            </body>
        </div>
            </div>
            
    </>
    
  )
}
