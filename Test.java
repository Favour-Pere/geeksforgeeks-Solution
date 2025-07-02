import java.time.LocalDate;

public class Test {

    public static void main(String[] args) {
        LocalDate date = LocalDate.now();
        LocalDate newDate = LocalDate.of(2025, 1, 3);

        System.out.println(!date.isBefore(date));
    }
}