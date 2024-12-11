package com.company.searchuser.searchuser.services;


import com.company.searchuser.searchuser.models.UserModel;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class UserService {
    private static final Map<Long, UserModel> servicos = new HashMap<>();

    public UserModel post(UserModel userModel) {
        Long proximoId = servicos.keySet().size() + 1L;
        userModel.setId(proximoId);
        servicos.put(proximoId, userModel);
        return userModel;
    }

    public List<UserModel> getAll() {
        return new ArrayList<>(servicos.values());
    }

    public UserModel getById(Long id) {
        return servicos.get(id);
    }

    public UserModel put(Long id, UserModel userModel) {
        servicos.put(id, userModel);
        return userModel;
    }

    public String delete(Long id) {
        servicos.remove(id);
        return "Usuário Deletado com Sucesso!";
    }
}
