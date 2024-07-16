// pages/signin.tsx
import { signIn } from 'next-auth/react';

const Signin = () => {
  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        signIn('credentials', {
          email: e.currentTarget.email.value,
          password: e.currentTarget.password.value,
        });
      }}>
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          required 
        />
        <input 
          type="password" 
          name="password" 
          placeholder="Password" 
          required 
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Signin;
