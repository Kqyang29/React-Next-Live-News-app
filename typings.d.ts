type NewsResponse = {
  pagination: Pagenation;
  data: Article[]; // article data
}

type Pagenation = {
  count: Int;
  limit: Int;
  offset: Int;
  total: Int;
}


type Article = {
	author: String | null;
	category: String;
	country: String;
	description: String;
	image: String | null;
	language: String;
	published_at: String;
	source: String;
	title: String;
	url: String;
};

type Category =
	| "general"
	| "business"
	| "entertainment"
	| "health"
	| "science"
	| "sports"
	| "technology";
