class Api::DrinksController < ApplicationController

  # show
  def index
    render json: { drinks: Drink.all }
  end

  def create
    new_drink = Drink.create drink_params
    render json: { drink: new_drink }

  end

  def show
    your_drink = Drink.find params[:id]
    render json: { drink: your_drink }
  end

  def update
    drink = Drink.find params[:id]

    drink.update drink_params

    render json: { drink: drink}
  end

  def destroy
    death_row = Drink.find params[:id]

    # if !death_row.nil?
    #   death_row.destroy
      render json: { success: "Destroyed " + death_row.name }
    # else
      # render json: { error: "Didn't Work Person"}
    # end

  end

  private

  def drink_params
    params.require(:drink).permit(:name, :ingredients, :image, :location)
  end



end
