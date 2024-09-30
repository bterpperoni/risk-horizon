

import { FormEventHandler, useState } from 'react';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    // Code pour envoyer la requête d'inscription à la newsletter
    console.log('Inscription à la newsletter envoyée avec succès !');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Entrez votre adresse e-mail"
      />
      <button type="submit">S'inscrire à la newsletter</button>
    </form>
  );
};

export default NewsletterForm;