public class Cliente {
    private String nome;
    private String telefone;

    public Cliente() {} // Construtor padrão

    public Cliente(String nome, String telefone) { // Construtor parametrizado
        this.nome = nome;
        this.telefone = telefone;
    }

    public Cliente(Cliente outro) { // Construtor de cópia
        this.nome = outro.nome;
        this.telefone = outro.telefone;
    }

    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }

    public String getTelefone() { return telefone; }
    public void setTelefone(String telefone) { this.telefone = telefone; }

    public void exibirInfo() {
        System.out.println("Cliente: " + nome + ", Telefone: " + telefone);
    }
}
