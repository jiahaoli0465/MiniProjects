class Solution {
    public String solution(int N) {
        StringBuilder result = new StringBuilder();

        if (N <= 26) {
            for (int i = 0; i < N; i++) {
                char letter = (char) ('a' + i);
                result.append(letter);
            }
            return result.toString();
        }

        int dupe = N/26 + 1;

        int remainder = N%26;

        for (int i = 0; i < N; i++) {
            for (int j = 0; j < dupe; j++) {
                int temp = i%26;
                char letter = (char) ('a' + temp);
                result.append(letter);
                if (result.length() == N) {
                    return result.toString();

                }
            }


        }


        
        return result.toString();
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.solution(60));
        
    }
}