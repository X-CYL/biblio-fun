import React from 'react'
import Button from 'components/micro/Button'
import InputCustom from 'components/micro/Inputcustom'

export default function SubscribeCard() {
  return (
    <>
        <div className="grid h-screen place-items-center">
        <div className="bg-bg-secondary w-72 md:w-[600px] border-4 border-border-input-color rounded-xl h-[500px]">
          <h2 className="text-4xl md:text-6xl text-center font-primary-font text-bg-primary">
            S'inscrire
          </h2>
          <body>
            <div className="grid grid-rows-4 md:justify-center">
            <div className='mt-1'>
                <InputCustom type="text" labelName="votre pseudo"/>
              </div>
              <div className=''>
                <InputCustom type="email" labelName="Votre e-mail" />
              </div>
            <div className="">
               <InputCustom type="password" labelName="Mot de passe" />
            </div>
            <div className="">
                <InputCustom type="password" labelName="Repeter mot de passe" />
            </div>
        
            </div>
            <div className="container mx-auto flex flex-row justify-around mt-8 md:mt-6">
              <div>
                <Button name="Annuler" variant="green" />
              </div>
              <div>
                <Button name="Connexion" variant="red" />
              </div>
            </div>
          </body>
        </div>
      </div>
    </>
  )
}
