import java.util.Scanner;

public class App {
    int x, y;

    App(int a, int b) {
        x = a;
        y = b;
    }

    void bro() {
        System.out.println("add" + (x + y));
        System.out.println("mul" + (x * y));
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("enter value 1");
        int num1 = sc.nextInt();
        System.out.println("enter value 2");
        int num2 = sc.nextInt();
        App c = new App(num1, num2);
        c.bro();
        sc.close();
    }
}