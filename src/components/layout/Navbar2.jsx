import React from "react";

export default function Navbar2() {
  return (
    <>
      <navbar className="fixed top-0 left-0 right-0">
        <div className="mr-4 ml-4">
          <ul className="flex justify-around">
              <li>Acceuil</li>
              <li>Qui suis je</li>
              <li>Gérer mes livres</li>
              <li>Se connecter</li>
              <li>S'inscrire</li>
              <li>Compte</li>
          </ul>
        </div>
      </navbar>
    </>
  );
}
