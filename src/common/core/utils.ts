import CommonVars from "./commonVars";

export class Utils {
  public static _routesMap: Map<string, string> = new Map([
    [CommonVars.HOME, "/"],
    [CommonVars.PROFIL, "/profil"],
  ]);
  public static _pageMap: Map<string, string> = new Map([
    [CommonVars.HOME, "Espace de travail"],
    [CommonVars.PROFIL, "Mon profil"],
  ]);
}
