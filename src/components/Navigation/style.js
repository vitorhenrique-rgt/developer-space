import styled from "styled-components";

export const NavContainer = styled.aside`
  max-width: 200px;
  height: calc(100dvh - 40px);
  padding: 16px;
  border-radius: 12px;
  margin-right: 20px;
  background-color: #1d232c; //gray-900
`
export const LogoContainer = styled.div`
  padding-top: 4px;
  padding-bottom: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  gap: 5px;

  img{
    width: 30px;
  }

  span{
    font-size: 18px;
    font-weight: 900;
  }
`
export const NavListItem = styled.a`
  width: 100%;
  height: 48px;
  margin: 2px;
  padding: 16px;
  line-height: 16px;
  text-decoration: none;
  border-radius: 6px;
  color: #586a84; //gray-700
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;


  span{
    font-size: 24px;
		color: #586a84;
  }

	span:nth-child(2){
		font-size: 14px;
	}
	`
