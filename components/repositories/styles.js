import { StyleSheet } from "react-native";

export default StyleSheet.create({
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    color: "#404040",
  },
  reposContainer: {
    marginTop: 25,
  },
  repo: {
    paddingTop: 5,
    paddingBottom: 5,
  },
  borderBottom: {
    borderBottomColor: "#dcdcdc",
    borderBottomWidth: 1,
  },
  repoTitle: {
    fontWeight: "bold",
    color: "#404040",
  },
  repoDescription: {
    color: "#585858",
  },
  repoFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  repoForks: {
    color: "#585858",
  },
  link: {
    color: "blue",
  },
  logOutButton: {
    width: "30%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 30,
    padding: 7,
    backgroundColor: "#c90000",
    borderRadius: 3,
    textAlign: "center",
    cursor: "pointer",
  },
  logOutButtonText: {
    color: "#fff",
    fontFamily: "Arial",
    fontSize: 12,
  },
  spinner: {
    width: 50,
    height: 50,
    marginLeft: "auto",
    marginRight: "auto",
  },
});
