import React from 'react';
import Button from 'components/micro/Button';

function NotFound404() {
    return (
        <>
        <div className="grid h-screen place-items-center">
          <div className="bg-bg-secondary w-72 w-[300px] md:w-[600px] border-4 border-border-input-color rounded-xl h-[500px]">
            <body className='container flex flex-col'>
              <div className='text-center mt-20'>
                <h2 className='text-4xl text-amber-400 font-card-font'> Oups la page que vous demandez n'existe pas !!!</h2>
              </div>
              <div className='mx-auto mt-40'>
                  <Button name="Retour accueil" variant="red" />
              </div>
            </body>
          </div>
        </div>
      </>
    );
}

export default NotFound404;