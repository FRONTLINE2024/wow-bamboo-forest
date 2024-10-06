import { wowBambooAxios } from "../../../shared";

/**
 * @typedef {object} AuthRequest
 * @property {string} nickname - 닉네임
 * @property {string} password - 비밀번호
 */

/**
 * @description - 회원가입 API
 * @param {AuthRequest} data - 회원가입 요청 데이터
 * @returns {Promise} - 회원가입 응답 데이터
 */
export const signup = async (data) => {
  const response = await wowBambooAxios.post("/auth/signup", data);
  return response.data;
}

/**
 * @description - 로그인 API
 * @param {AuthRequest} data - 로그인 요청 데이터
 * @returns {Promise<string>} - 로그인 응답 데이터
 */
export const login = async (data) => {
  const response = await wowBambooAxios.post("/auth/login", data);
  return response.data;
}
