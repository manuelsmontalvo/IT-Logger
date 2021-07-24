import api from './apiConfig'

export const getTechs = async () => {
  try {
    const res = await api.get('/techs')
    return res.data
  } catch (error) {
    throw error
  }
}

export const getTech = async (id) => {
  try {
    const res = await api.get(`/techs/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}