// public class Main {
//     public static void main(String[] args) {
//         System.out.println("Hello, World!");
//     }
// }


import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

public class LiveFootballScoreboard {
    private List<Game> games;

    public LiveFootballScoreboard() {
        this.games = new ArrayList<>();
    }

    public Game startNewGame(String homeTeam, String awayTeam) {
        Game game = new Game(homeTeam, awayTeam);
        games.add(game);
        return game;
    }

    public void updateScore(Game game, int homeScore, int awayScore) {
        if (!games.contains(game)) {
            throw new IllegalArgumentException("Game does not exist.");
        }
        if (homeScore < 0 || awayScore < 0) {
            throw new IllegalArgumentException("Score must be non-negative integers.");
        }
        game.setHomeScore(homeScore);
        game.setAwayScore(awayScore);
    }

    public void finishGame(Game game) {
        if (!games.contains(game)) {
            throw new IllegalArgumentException("Game does not exist.");
        }
        games.remove(game);
    }

    public List<String> getSummary() {
        List<Game> sortedGames = new ArrayList<>(games);
        sortedGames.sort(Comparator.comparingInt((Game g) -> g.getAwayScore() + g.getHomeScore())
                .thenComparingInt((Game g) -> games.indexOf(g)).reversed());
        List<String> summary = new ArrayList<>();
        for (int i = 0; i < sortedGames.size(); i++) {
            Game game = sortedGames.get(i);
            summary.add((i + 1) + ". " + game.getHomeTeam() + " " + game.getHomeScore() + " - " + game.getAwayScore()
                    + " " + game.getAwayTeam());
        }
        return summary;
    }

    public static void main(String[] args) {
        LiveFootballScoreboard scoreboard = new LiveFootballScoreboard();

        Game game1 = scoreboard.startNewGame("Mexico", "Canada");
        scoreboard.updateScore(game1, 0, 5);

        Game game2 = scoreboard.startNewGame("Spain", "Brazil");
        scoreboard.updateScore(game2, 10, 2);

        Game game3 = scoreboard.startNewGame("Germany", "France");
        scoreboard.updateScore(game3, 2, 2);

        Game game4 = scoreboard.startNewGame("Uruguay", "Italy");
        scoreboard.updateScore(game4, 6, 6);

        Game game5 = scoreboard.startNewGame("Argentina", "Australia");
        scoreboard.updateScore(game5, 3, 1);

        List<String> summary = scoreboard.getSummary();
        for (String s : summary) {
            System.out.println(s);
        }
    }
}
