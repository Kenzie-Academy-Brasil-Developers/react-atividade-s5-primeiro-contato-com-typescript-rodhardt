interface CardProps {
  name: string;
  age: number;
  hobby: string;
}

export const Card = ({ name, age, hobby }: CardProps) => {
  return (
    <div>
      <h3>Nome: {name}</h3>
      <h3>Idade: {age}</h3>
      <h3>Hobby: {hobby}</h3>
    </div>
  );
};
