import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 36px;
  color: #333;
  margin-bottom: 20px;
  text-transform: uppercase;
`;

export const Poster = styled.img`
  width: 300px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

export const Plot = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 30px;
  max-width: 600px;
  line-height: 1.6;
`;

export const FavoriteButton = styled.button<{ $isFavorite: boolean }>`
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 25px;
  border: none;
  background-color: ${({ $isFavorite }) =>
    $isFavorite ? "#ff6b6b" : "#4CAF50"};
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: ${({ $isFavorite }) =>
      $isFavorite ? "#ff4c4c" : "#45a049"};
    transform: translateY(-3px);
  }
`;
