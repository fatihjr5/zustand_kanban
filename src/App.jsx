import Column from "./components/column"
import Layout from "./layout"

function App() {
  return (
    <Layout>
      <Column state="Perencanaan"/>
      <Column state="Berjalan"/>
      <Column state="Selesai"/>
    </Layout>
  )
}

export default App