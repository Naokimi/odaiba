class WorksheetPolicy < ApplicationPolicy
  # NB: No index action defined for now so Scope is commented out
  # class Scope < Scope
  #   def resolve
  #     scope.all
  #   end
  # end

  def show?
    return true
  end

  def edit?
    return true
  end

  def updated?
    return true
  end
end
