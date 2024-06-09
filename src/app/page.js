'use client'
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();

  const navigate = (path) => {
    router.push(path)
  }
  return (
    <div>
      <h1>
        Hii Ajay Kumar
      </h1>
      <button onClick={() => { navigate('/register') }}>Register</button>
      <button onClick={() => { navigate('/login') }}>Login</button>
    </div>
  );
}
