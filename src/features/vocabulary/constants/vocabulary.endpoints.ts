export enum VocabularyEndpointsEnum {
  GET_TOPICS = "/topic/list",
  GET_PARTS_OF_SPEECH = "/part-of-speech/list",
  POST_VOCABULARY = "/vocabulary/create",
  GET_VOCABULARY = "/vocabulary/detail/:word",
  GET_LIST_VOCABULARY = "/vocabulary/list_topic/:topic",
  POST_MARK_VOCABULARY = "/mark/vocabulary",
  GET_MARK_VOCABULARY_LIST = "/mark/vocabulary/list/:topic_name",
}
