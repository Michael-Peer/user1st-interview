
import { useState } from 'react';
import './App.css';
import { ItemList } from './cmps/ItemList/ItemList';
import { Search } from './cmps/Search/Search';

function App() {
  const [items, setItems] = useState([])

  /**
   * 
   *     ****Scripty code*****
   * 
   *   window.addEventListener('message', ev=> {   
   *
   *      if(ev.data) {
          var iframeEl = document.getElementById('search-iframe')
          let images = Array.from(document.getElementsByTagName('img'))
          images = images.filter(image => image.alt.includes(ev.data))
          images = images.map(({alt, src}) => ({alt, src}))
          iframeEl.contentWindow.postMessage(JSON.stringify(images), 'http://localhost:3000');
          }
      })
  


          const iframe = document.createElement("iframe");
          iframe.src = 'http://localhost:3000/'; 
          iframe.width = '600'
          iframe.height = '600'
          iframe.id = 'search-iframe'
          document.body.appendChild(iframe);
        
   * **/



  window.addEventListener('message', ev => {
    if (ev.origin === 'https://www.ikea.co.il' && JSON.parse(ev.data).length) {
      setItems(JSON.parse(ev.data))
    }
  })


  const onUserSeach = (term) => {
    if (!term.trim()) return
    window.parent.postMessage(term, 'https://www.ikea.co.il/catalogue/Workspaces')
  }


  return (
    <div className="App">
      <Search onUserSeach={onUserSeach} />
      <ItemList items={items} />
      {!items.length && <p className="align-self-center ">No items here yet</p>}
    </div>
  );
}

export default App;
