import styles from "./Register.mudule.css"
import { useEffect, useState } from "react"
import { useAuthentication } from "../../hooks/useAuthentication"

const Register = () => {
  const [displayName, setDisplayName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const[confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")

  const { createUser, error: authError, loading } = useAuthentication()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    const User = {
      displayName,
      email,
      password
    }

    if (password !== confirmPassword) {
      setError("Senhas Diferentes")
      return
    }

    const res = await createUser(User)

    console.log(res)

    useEffect(() => {
      if (authError) {
        setError(authError)
      }
    }, [authError])

    return (
      <div className={styles.register}>
        <h1>Nescessario cadastrar para postar</h1>
        <p>Crie o Usuario e Compatilhe suas histórias</p>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome do Usuario</span>
            <input 
            type="text"
            name="displayName"
            required
            placeholder="Nome do Usuário"
            onChange={(e) => setDisplayName(e.target.value)}
            value={displayName}
            />
          </label>
          <label >
            <span>E-mail</span>
            <input 
            type="email"
            name="email"
            required
            placeholder="E-mail do Usuário"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            />
          </label>

          <label>
            <span>Senha:</span>
            <input 
            type="password"
            name="password"
            required
            placeholder="insira a senha"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            />
          </label>
          <label>
            <span>Corfimar a Senha</span>
            <input 
            type="password"
            name="corfirmPassword"
            required
            placeholder="Confirme a senha"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={corfirmPassword}
            />
          </label>
          {!loading && <button className="btn">Entrar</button>}
          {loading &&(
          <button className="btn" disabled>
            Aguarde...
          </button>
          )}
          {error && <p className="error">{error}</p> }
        </form>
      </div>
    )
  }
}
 
export default Register
