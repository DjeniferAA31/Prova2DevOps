import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/customers")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Deu erro");
        }

        return response.json();
      })
      .then((data) => {
        setCustomers(data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <h1>Customers</h1>

      {loading && <p>Carregando </p>}

      {error && <p className="error">{error}</p>}

      {!loading && !error && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome completo</th>
              <th>E-mail</th>
              <th>Telefone</th>
              <th>Data de nascimento</th>
            </tr>
          </thead>

          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.id}</td>
                <td>{customer.full_name}</td>
                <td>{customer.email}</td>
                <td>{customer.phone}</td>
                <td>{customer.birth_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
