/* Import Google font - Poppins */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
body{
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  background: #E3F2FD;
}
.download-btn{
  outline: none;
  border: none;
  color: #fff;
  display: flex;
  cursor: pointer;
  padding: 16px 25px;
  border-radius: 6px;
  align-items: center;
  white-space: nowrap;
  background: #4A98F7;
  transition: all 0.2s ease;
}
.download-btn:hover{
  background: #2382f6;
}
.download-btn.timer{
  color: #000;
  background: none;
  transition: none;
  font-size: 1.6rem;
  pointer-events: none;
}
.download-btn.timer b{
  color: #4A98F7;
  padding: 0 8px;
}
.download-btn .icon{
  font-size: 2rem;
}
.download-btn .text{
  font-size: 1.5rem;
  padding-left: 10px;
}