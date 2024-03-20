import Map from './components/Map';

export default function Localizacao({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
        <Map/>
      </body>
    </html>
  )
}