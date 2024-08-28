import "../styles/index.css"

function Main ({children}){
return(
 // Le composant Main encapsule et affiche les éléments enfants passés en props
    <main>{children}</main>
)
}

export default Main