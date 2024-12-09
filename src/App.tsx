import './App.css'
import DynamicForm from './components/FormWrapper'
import config from "./config/config"


function App() {
    return (
        <>
            <DynamicForm
                config={config}
                onSubmit={(formData) => {
                    console.log(JSON.stringify(formData, null, 2))
                }}
            />
        </>
    )
}

export default App
