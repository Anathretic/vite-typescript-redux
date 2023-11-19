import { Link, useNavigate } from 'react-router-dom';

export const Fallback: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <p>Błędny adres!</p>
      <Link to={'/'}>Strona główna</Link>
      <button onClick={() => navigate(-1)}>Wstecz</button>
    </div>
  );
};
