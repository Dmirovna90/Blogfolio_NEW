import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const signUpUser = createAsyncThunk('user/signUpUser', async(registrationData, {rejectWithValue}) => {
    try {
        const response = await fetch('https://studapi.teachmeskills.by/auth/users/',
            {
            method: 'POST',
            body: JSON.stringify(registrationData),
            headers: {
                "Content-Type": "application/json",
            },
            }
        );
        console.log(await response.text());
        if (!response.ok) {
            throw new Error("error is here");
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        return rejectWithValue((error as Error).message);
    }
});
export const activateUser = createAsyncThunk("user/signUpUser", async (tokenData, { rejectWithValue }) => {
      try {
        const response = await fetch("https://studapi.teachmeskills.by/auth/users/activation/",
          {
            method: "POST",
            body: JSON.stringify(tokenData),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log("activated");
        if (!response.ok) {
          throw new Error("error is here");
        }
        const data = await response.json();
        console.log(data);
        return true;
      } catch (error) {
        return rejectWithValue(false);
      }
    }
  );
const signUpSlice = createSlice ({
    name: 'user',
    initialState: {
        user: null,
        error: null as null | string,
        loading: false,
        activated: false,
    },
    reducers: {
        addUser(state, action) {
            state.user = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(signUpUser.pending, (state) => {
          state.loading = true;
          state.error = null;
        });
        builder.addCase(signUpUser.fulfilled, (state, action) => {
          state.user = action.payload;
          state.error = null;
          state.activated = true;
        });
        builder.addCase(signUpUser.rejected, (state, action) => {
          state.user = null;
          state.error = action.payload as string;
        });
      },
});
export default signUpSlice.reducer;