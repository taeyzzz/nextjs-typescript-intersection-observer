import styled from "styled-components";

export default styled.div`
  .header-container{
    position: fixed;
    top: 0px;
    width: 100%;
    height: 100px;
    background: red;
  }
  .page-container{
    position: fixed;
    top: 100px;
    width: 100%;
    height: calc(100vh - 100px);
    background: blue;
    overflow: auto;
    .content-container{
      display: flex;
      width: 100%;
      background: green;
      .leftbar-container{
        position: fixed;
        width: 200px;
        height: calc(100vh - 200px);
        background: aqua;
      }
      .content{
        flex: 1;
        margin-left: 200px;
        width: 100%;
        height: 2000px;
      }
    }
    .footer-container{
      width: 100%;
      height: 100px;
      background: yellow;
    }
  }
`;
