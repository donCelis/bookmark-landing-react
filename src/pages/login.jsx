import { Link } from "react-router-dom";

function Login() {
  return (
    <section className="container py-4">
      <h1 className="text-center">Inicio de sesión</h1>
      <form>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Usuario"/>
        </div>
        <div className="form-group">
          <input type="password" className="form-control" placeholder="Contraseña"/>
        </div>
        <div className="form-group">
          <input type="submit" className="form-control btn btn-success" value="Ingresar"/>
        </div>
      </form>
      <Link className="btn btn-info" to="/">
        Home
      </Link>
    </section>
  );
}

export default Login;
