# Como realizar as requisições HTTP:

- Primeiro vamos adicionar um aluno e um professor no banco de dados
  
  *Para isso primeiro temos que adicionar um corpor em formato JSON:
  
   ![image](https://github.com/sophiaflorencio/TrabalhoI/assets/160235369/1545adc6-5fbb-49f3-8db8-99494151787b)

  - Adicionando professor:
    
    ![post-professor](https://github.com/sophiaflorencio/TrabalhoI/assets/160235369/838a87b4-cf7c-4a3f-b3bf-ddd546f99d1b)
    
      Assim adicionamos um professor com nome, idade e formação

  - Adicionando aluno:
    
    ![post-aluno](https://github.com/sophiaflorencio/TrabalhoI/assets/160235369/df5ab325-2194-418a-b0e5-493ae12ea907)
      Já na criação do aluno temos nome, idade, serie e o id do professor desse respectivo aluno

- Agora podemos fazer o get dos alunos e professores
  - get professor:
    - sem parametro:
      ![get-professor-semparametro](https://github.com/sophiaflorencio/TrabalhoI/assets/160235369/95a81d0f-57f0-41e1-9f6a-a425193cfbd7)
       Assim recebemos todos os professores

    - com parâmetro:
      ![get-professor-comparametro](https://github.com/sophiaflorencio/TrabalhoI/assets/160235369/aabe2abc-dd6d-47af-9651-ee93cb7a3187)
       Assim recebemos apenas o professor desejado e todos os alunos relacionados a ele
      
   - get aluno:
      - sem parametro:
        ![image](https://github.com/sophiaflorencio/TrabalhoI/assets/160235369/3f497450-8e5c-432b-bf01-32b5df9ba3e6)
        Assim recebemos todos os alunos cadastrados

      - com parametro:
        ![image](https://github.com/sophiaflorencio/TrabalhoI/assets/160235369/970d852d-794b-413f-be04-b96b32e189f0)
        Podemos receber um aluno específico adicionando "/nome/_nomedoaluno_", assim também recebemos o professor relacionado com esse aluno.

- Para editar algum aluno ou professor

  *Primeiro temos que adicioar um corpo em formato JSON assim como no método POST
   - put professor:
     ![image](https://github.com/sophiaflorencio/TrabalhoI/assets/160235369/a38c62c2-1211-4578-94ca-4ba3dc2abf9f)
     Para editar algum dado de alguma entidade temos que seleciona-la pela URL e mudar os dados no body
     
   - put aluno:
    ![image](https://github.com/sophiaflorencio/TrabalhoI/assets/160235369/7138c790-d803-4826-9607-563d2ae4c069)
    Editamos um alunno da mesma forma que um professor

- Para excluir um professor ou aluno

  - Delete professor:
    ![image](https://github.com/sophiaflorencio/TrabalhoI/assets/160235369/59933190-1121-4238-8ec6-fdabc04f058e)
    Para excluir um professor apanas o selecionamos por algum parametro, como o id, na URL

  - Delete aluno:
    ![image](https://github.com/sophiaflorencio/TrabalhoI/assets/160235369/1bbbea07-d971-4aa6-976b-0645459fc4ae)
    Da mesma forma podemos excluir um aluno
