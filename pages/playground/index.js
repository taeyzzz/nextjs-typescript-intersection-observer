import PlaygroundStyled from './styled'

const Playground = () => {
  return (
    <PlaygroundStyled>
      <div className="header-container">
        header
      </div>
      <div className="page-container">
        <div className="content-container">
          <div className="leftbar-container">
            leftbar
          </div>
          <div className="content">
            home page
          </div>
        </div>
        <div className="footer-container">
          footer
        </div>
      </div>
    </PlaygroundStyled>
  )
}

export default Playground
