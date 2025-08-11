//now we want to render anchor(a) tag 

function RenderElement(mainContainer,Reactelement){
//   const newelement =document.createElement(Reactelement.type);
//   newelement.setAttribute("href",Reactelement.props.href)
//   newelement.setAttribute("target",Reactelement.props.target)
//   newelement.innerHTML=Reactelement.children;
//   mainContainer.appendChild(newelement)

//in above code setAttribute method is calling again and again
// so we can using loop here to simplify our implementation to write
// more modular code

   const newelement =document.createElement(Reactelement.type);
   newelement.innerHTML=Reactelement.children;
   for(const key in Reactelement.props){
      newelement.setAttribute(key,Reactelement.props[key])
   }
   mainContainer.appendChild(newelement)
}

//this type of element is created by react
const Reactelement={
    type: 'a',
    props:{
        href: "https://google.com",
        target: "_blank"
    },
    children:'click me to visit google'
}

//selecting root id on which we would render a tag
const mainContainer=document.getElementById('root');

//calling method to render this ReactElement, which
// need to be rendered inside this root id element
RenderElement(mainContainer,Reactelement)