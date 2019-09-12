export interface GitHubIssue {
  id: string;
  html_url: string;
  title: string;
  body: string;
  user: IssueAuthor;
  created_at: string;
}

export interface IssueAuthor {
  login: string;
  avatar_url: string;
  url: string;
  html_url: string;
}

export interface FetchGitHubIssuesRes {
    total_count: number;
    items: GitHubIssue[];
}
