import java.util.Scanner;

class Calculator {
    Calculator(int a, int b) {
        System.out.println("Addition: " + (a + b));
        System.out.println("Multiplication: " + (a * b));
    }
}

public class App {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter first number: ");
        int a = sc.nextInt();

        System.out.print("Enter second number: ");
        int b = sc.nextInt();

        Calculator calculator = new Calculator(a, b);

        sc.close();
    }
}
