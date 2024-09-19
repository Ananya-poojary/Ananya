import java.util.Scanner;
public class Calculator {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter number one: ");
        double number1 = scanner.nextDouble();
        System.out.print("Enter number two: ");
        double number2 = scanner.nextDouble();
        System.out.println("Enter the operation: ");
        int operation=scanner.nextInt();

        System.out.print("result: ");
        double result = 0;
        switch (operation){
            case 1:
                result=number1+number2;
                System.out.println(result);
                break;
            case 2:
                result=number1-number2;
                System.out.println(result);
                break;
            case 3:
                result=number1*number2;
                System.out.println(result);
                break;
            case 4:
                result=number1/number2;
                System.out.println(result);
                break;
            default:
                System.out.println("Invalid operation selected.");
        }

    }
}